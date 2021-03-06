import {PreviewComponent} from './preview-component';

export const CategoryPage = {
  props: ['components', 'categories', 'id'],
  template: `
    <div class="content">

      <h2 class="content__header">{{category.name}} Components</h2>

      <div class="components">
        <css-component v-for="component in filterComponents()" :component="component" :key="component.id" />
      </div>
    </div>
  `,
  components: {
    'css-component': PreviewComponent
  },
  computed: {
    category() {
      return this.categories.filter(category => category.hash === this.id)[0];
    }
  },
  methods: {
    filterComponents() {
      const category = this.category;
      const components = this.components.filter(component => {
        return component.category === category.name;
      });
      return components;
    },
  }
};
