# TimStewartJ.com

This is the repo for my personal website.

Currently it uses Jekyll

## Development

### Local development

Run `bundle exec jekyll serve` to start a development server.

### Deployment

The site is built with Jekyll and deployed to GitHub Pages with GitHub Actions.

After merging the Pages workflow, set the repository Pages source to **GitHub Actions**:

https://github.com/TimStewartJ/personal-site/settings/pages

### Branch previews

Branches other than `main` and `infra/**` are deployed as previews under `/previews/<branch-slug>/`.

For example, pushing a branch named `site-refresh` creates:

https://timstewartj.com/previews/site-refresh/

The preview workflow builds the production root from `main`, then builds the preview branch into the preview subdirectory before deploying one combined GitHub Pages artifact.
