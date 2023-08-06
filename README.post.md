## Your repository is almost ready

There are few more steps to enable GitHub Pages and continuous deployment.

1. Enable GitHub Pages
   1. Navigate to [Pages settings](../../settings/pages)
   1. In the "Source" field, select "GitHub Actions"
1. Trigger the deployment
   1. [Modify and commit `App.tsx` to the `main` branch](../../edit/main/src/app/ui/App.tsx)
   1. Check deployment workflow at [![Deploy static content to Pages](../../actions/workflows/deploy-pages.yml/badge.svg)](../../actions/workflows/deploy-pages.yml)

### GitHub Codespaces

You can set up prebuild to speed up Codespaces creation. The prebuilt image will pre-install all dependencies under `/node_modules/` with initial build.

1. [Set up Codespaces prebuilds](../../settings/codespaces/prebuild_configurations/new)
   1. Check prebuild workflow at [![Codespaces Prebuilds](../../actions/workflows/codespaces/create_codespaces_prebuilds/badge.svg)](../../actions/workflows/codespaces/create_codespaces_prebuilds)

Once the prebuild action is completed, you can create a new prebuilt codespace.
