# Storylab
![](https://img.shields.io/npm/v/@2-bit/storylab?color=success&logoColor=orange&style=plastic)  
![](https://img.shields.io/github/last-commit/johnson-jesse/storylab?color=blueviolet&style=plastic)

The GitLab + Storybook integration
---

Add new issues. Quick view issues by component title.

![](https://raw.githubusercontent.com/johnson-jesse/storylab/main/.github/images/storylab-2.png)

## Setup

Add environment variables. see `.env.example`

```bash
SL_GL_PROJECT_ID=<gitlab_repository_name_id>
SL_GL_USER=<gitlab_user_name>
SL_GL_TOKEN=<gitlab_personal_access_token>
```

*Where do I find the project id?*
>From GitLab, click `menu` > `projects` > `<project name>`. Your project id will be listed at the top of the page just under your project name. A future update will eliminate this env.

## Develop
The Storylab addon works with GitLab by looking for any issues with matching labels. i.e. [GitLab label](https://docs.gitlab.com/ee/user/project/labels.html).

Matching components and issues works out of the box. Following *Storybook's* naming convention as normal. Storylab will automatically fetch data by the story's group title. This translates from `Widget/Button` to `widget-button`. And `Widget/button` with the _Large_ variant to `widget-button--large`.

```jsx
export default {
  title: "Widget/Button/Action",
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
```

New issues created through Storylab will add, by default, two labels needed for tying stories and issues together; `<group_name>-<component_name>` and `<group_name>-<component_name>--<variant_name>`. Labels are add as all lowercase. e.g. `widget-button--large`.

## Component & Label Naming
We recommend sticking to *Storybook's* naming convention for your component stories. For labels, no particular pattern is necessary except when tying an issue directly to your story. This is done automatically when creating an issue through Storylab. To tie an issue manually through GitLab, add the label group to your issue. For `Widget/Button` with the _Large_ variant, add the label `widget-button`. You can optionally add the full label for large. `widget-button--large`.

## Making this addon more awesome! 🤘
- [x] Add open new issue feature
- [ ] Change issue state within a board. e.g. From `In Progress` to `Review`
- [x] Add support for custom labels instead of the hard coded ones prior to version 0.0.26.
- [x] Automatically handle getting board labels rather than using env.
- [ ] Make the `SL_GL_PROJECT_ID` optional and load the first project by default~~
- [ ] Make projects selectable in the panel
- [ ] Make boards selectable in the panel
- [x] Make component identifying labels url safe
- [ ] Provide richer set of information for the overview tab

## Missing a feature?
Feel free to open an issue against my repo or even contribute to the project. 🙌
