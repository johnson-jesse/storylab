# Storylab ![](https://img.shields.io/npm/v/@2-bit/storylab?color=success&label=Storylab&logoColor=orange&style=plastic)  ![](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fmobile.twitter.com%2F__fizzog__)
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

Open a stories file and modify the parameters. Set `storylab` equal to your button's identifying label in GitLab.

```tsx
// Button.stories.js

export default {
  title: "Button",
  component: Button,
  parameters: {
    "storylab": 'Widget/Button', // "storylab": "<GitLab label>"
  },
};
```

### Component Story Param Naming
Try to establish a project wide convention for component labels. What you choose is entirely up to you. Maybe this can get you started:

* `Widget/<component_name>` - This is your smallest component within your codebase
* `Feature/<component_name>` - This is some combination of elements that do somehting cool
* `Page/<component_name>` - One of your amazing full page views

Storylab will take this parameter and return any issues that have this label attached. Consider this a component identifying label.

### Making this addon more awesome! 🤘
- [ ] Add open new issue feature
- [ ] Add label status change feature
- [x] Add support for custom labels instead of `Progress`, `Review`, `Acceptance`, `Done`.
- [x] Automatically handle getting board labels rather than using env.
- [ ] Make the `SL_GL_PROJECT_ID` optional and load the first project by default
- [ ] Make projects selectable in the panel
- [ ] Make boards selectable in the panel
- [x] Make component identifiying labesl url safe
- [ ] Provide richer set of information for the overview tab

### Missing a feature?
Feel free to open an issue against my repo or even contribute to the project. 🙌
