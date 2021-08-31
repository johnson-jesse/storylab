# Storylab
The GitLab + Storybook integration

### Setup

add environment variables

```bash
SL_GL_PROJECT_ID=<gitlab_repository_name_id>
SL_GL_USER=<gitlab_user_name>
SL_GL_TOKEN=<gitlab_personal_access_token>
```

### Develop
The StoryLab addon works with GitLab by looking for any issues with matching labels. i.e. [GitLab label](https://docs.gitlab.com/ee/user/project/labels.html).

Open a story and modify the parameters. Set `storylab` equal to your button identifying label in GitLab.

```tsx
// Button.stories.js

export default {
  title: "Widget/Button",
  component: Button,
  parameters: {
    "storylab": 'Widget/Button',
  },
};
```

### Component Story Param Naming
Try to establish a project wide convention for GitHub labels. Maybe this can get you started:

* `Widget/<component_name>` - This is your smallest component within your codebase
* `Feature/<component_name>` - This is some combination of elements that do somehting cool
* `Page/<component_name>` - One of your amazing full page views

StoryLab will take this parameter and return any issues that have this label attached.

### GitHub Issue Label Naming
Issues are split up between three tabs. Idle, Active, and Closed. If an issue is opened, then it will fall into Idle tab unless one of these labels is present: `Progress`, `Review`, `Acceptance`, `Done`.

### todo
- [ ] Make this addon more awesome! 🤘
- [ ] Add open issue feature
- [ ] Add label status change feature