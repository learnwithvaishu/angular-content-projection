Angular Content Projection

- Primarly used to add external content in the Template or project a content in another template.

* @Input decorator is used to pass data from the parent component to the child component, but this cannot be used to pass content (such as HTML elements, CSS, etc) to the child component. We achieve this using content projection.

* As per Angular docs, "Content projection is a pattern in which you insert, or project, the content you want to use inside another component."

* We use the ng-content element to designate a spot in the template of the child component.
