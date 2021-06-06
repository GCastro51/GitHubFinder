class GitHub {
  constructor() {
    this.personal_token = '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';

    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
      headers: {
        'Authorization': `token ${this.personal_token}`
      }
    });

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, {
      headers: {
        'Authorization': `token ${this.personal_token}`
      }
    });
    
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }

}