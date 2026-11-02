# Minimal Mistakes

Upstream: https://github.com/mmistakes/minimal-mistakes
Version: 4.28.1 (master archive retrieved 2026-11-02).
License: licenses/minimal-mistakes-LICENSE.txt (MIT).

The original theme layouts, includes, Sass and JavaScript are copied locally.
CodeBlue posts, avatar, profile data, post URLs and Waline service are preserved.
Waline is connected using the theme's custom comments provider.

Configuration: `_config.yml`; menus: `_data/navigation.yml`; profile: `_data/profile.yml`.

Local preview:

```sh
bundle install
bundle exec jekyll serve
```

Previous TeXt files (including uncommitted changes) are backed up at:
../theme-backups/text-20261102-162751

Deployment uses the existing GitHub Pages workflow on the main branch.
