# Constructor

```javascript
new TeddyTags(selector);
```

**Initialize TeddyTags**

## Parameters

- `selector`

  **typeof string**

  The custom element's tag name

## Example

```javascript
new TeddyTags("customTag");
```

Will refer to

```html
<customTag></customTag>
```

---

# Class Properties

---

- `selector`

  **Typeof `NodeList`**

  The `querySelectorAll` which will be mutated from the `constructor` of this class.

---

- `elementName`

  **Typeof `string`**

  The name of the custom element, acquired from the `constructor`.

---

# Functions

- ## `set()`

  Magically change your custom element to the desired valid HTML5 one.

  ### Parameters

  - `tagName`

    **typeof string**

    The tag name of the custom element

  ### Example

  - Your custom element
    ```html
    <customTag>Hello, World!</customTag>
    ```
  - Using the function
    ```javascript
    new TeddyTags("customTag").set("h1");
    ```
  - The result
    ```html
    <h1 id="customTag">Hello, World!</h1>
    ```
