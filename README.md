# Very Basic GitLab Integration for Storybook

## setup

add environment variables

```bash
SL_GL_PROJECT_ID=<gitlab_repository_name_id>
SL_GL_USER=<gitlab_user_name>
SL_GL_TOKEN=<gitlab_personal_access_token>
```

## develop
The StoryLab addon works with GitLab by looking for any issues by their matching labels. i.e. [GitLab label](https://docs.gitlab.com/ee/user/project/labels.html).

Open a story and modify the parameter and pass a smartly mamed string:

```tsx
// Button.stories.js

export default {
  title: "Widget/Button",
  component: Button,
  parameters: {
    "storylab": 'Widget/Tag',
  },
};
```

## naming
Try to establish a project wide convention for labels. Maybe this can get you started:

* `Widget/<component_name>` - This is your smallest component within your codebase
* `Feature/<component_name>` - This is some combination of elements that do somehting cool
* `Page/<component_name>` - One of your amazing full page views

StoryLab will take this parameter and return any issues that have this label attached.

## todo
- [ ] Make this addon more awesome! 🤘