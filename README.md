# Storylab
The GitLab + Storybook integration

### Setup

add environment variables

```bash
SL_GL_PROJECT_ID=<gitlab_repository_name_id>
SL_GL_USER=<gitlab_user_name>
SL_GL_TOKEN=<gitlab_personal_access_token>
```

*Where do I find the project id?*
>From GitLab, click `menu` > `projects` > `<project name>`. Your project id will be listed at the top of the page just under your project name.

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
Try to establish a project wide convention for GitLab labels. Maybe this can get you started:

* `Widget/<component_name>` - This is your smallest component within your codebase
* `Feature/<component_name>` - This is some combination of elements that do somehting cool
* `Page/<component_name>` - One of your amazing full page views

Storylab will take this parameter and return any issues that have this label attached.

### GitLab Issue Label Naming
Issues are split up between three tabs. Idle, Active, and Closed. If an issue is opened, then it will fall into Idle tab unless one of these labels is present: `Progress`, `Review`, `Acceptance`, `Done`.

### Making this addon more awesome! 🤘
- [ ] Add open new issue feature
- [ ] Add label status change feature
- [x] Add support for custom labels instead of `Progress`, `Review`, `Acceptance`, `Done`.