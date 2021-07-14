const getRepos = require('./exercicio4.js');

describe('Verifica se existe o repositório', () => {
  it('https://api.github.com/orgs/tryber/repos existe sd-01-week4-5-project-todo-list', async () => {
    expect.assertions(2);
    await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-todo-list');
    await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});
