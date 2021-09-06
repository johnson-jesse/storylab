# Storylab ![](https://img.shields.io/npm/v/@2-bit/storylab?color=success&logoColor=orange&style=plastic) ![](https://img.shields.io/github/last-commit/johnson-jesse/storylab?color=blueviolet&style=plastic)

The GitLab + Storybook integration

![](https://raw.githubusercontent.com/johnson-jesse/storylab/main/.github/images/storylab.png)

### Setup

Add environment variables. see `.env.example`

```bash
SL_GL_PROJECT_ID=<gitlab_repository_name_id>
SL_GL_USER=<gitlab_user_name>
SL_GL_TOKEN=<gitlab_personal_access_token>
```

*Where do I find the project id?*
>From GitLab, click `menu` > `projects` > `<project name>`. Your project id will be listed at the top of the page just under your project name. A future update will eliminate this env.

### Develop
The Storylab addon works with GitLab by looking for any issues with matching labels. i.e. [GitLab label](https://docs.gitlab.com/ee/user/project/labels.html).

Following *Storybook's* naming convention with `/`'s, Storylab will automatically fetch data by the story title. The translates from `Widget/<component_name>` to `Widget-<component_name>`.

New issues created through Storylab will add, by default, two labels, `<group_name>-<component_name>` and `<group_name>-<component_name>--<variant_name>`. Labels are add all lowercase. So you might see something like this: `widget-button--large`.

### Component & Label Naming
We recommend sticking to *Storybook's* naming convention for your component stories. For labels, no particular pattern is necessary except when tying an tie an issue directly to your story. Add `<group_name>-<component_name>` to group like components.

### Making this addon more awesome! 🤘
- [x] Add open new issue feature
- [ ] Add label status change feature
- [x] Add support for custom labels instead of `Progress`, `Review`, `Acceptance`, `Done`. Board labels are fetched and used automatically.
- [x] Automatically handle getting board labels rather than using env.
- [ ] Make the `SL_GL_PROJECT_ID` optional and load the first project by default~~
- [ ] Make projects selectable in the panel
- [ ] Make boards selectable in the panel
- [x] Make component identifying labels url safe
- [ ] Provide richer set of information for the overview tab

### Missing a feature?
Feel free to open an issue against my repo or even contribute to the project. 🙌
