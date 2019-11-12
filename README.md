# Nova TextEditor

Nova field wrapper around the [vue-trumbowyg](https://github.com/ankurk91/vue-trumbowyg) which is a wrapper around [trumbowyg](https://alex-d.github.io/Trumbowyg/).

## Installation
1. `composer require mvnobrega/nova-texteditor`
2. That's it.

## Usage
Add the following to one of your resources

Import TextEditor

`use Mobsite\TextEditor\TextEditor;`

Then call it inside the fields method of your resource.

```
    public function fields(Request $request)
    {
        return [
            ...,
            TextEditor::make('body'),
            ...
        ];
    }
```

You can also pass in an array of options to use with Trumbowyg
```
    public function fields(Request $request)
    {
        return [
            ...,
            TextEditor::make('body')

                ->withMeta(['options' => [
                    'btns' => [
                        ['viewHTML'],
                        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                    ]
                ]]),
             ...
        ];
    }
```

By default, the Trumbowyg field will not display their content when viewing a resource on its detail page. It will be hidden behind a "Show Content" link, that when clicked will reveal the content. You may specify the Trumbowyg field should always display its content by calling the alwaysShow method on the field itself

```
    public function fields(Request $request)
    {
        return [
            ...,
            TextEditor::make('body')->alwaysShow(),
            ...
        ];
    }
```

By default, the Trumbowyg field will display in full width you can change this back to Nova's default (half) by using the `defaultWidth` method on the field, as shown below.

```
    public function fields(Request $request)
    {
        return [
            ...,
            TextEditor::make('body')->defaultWidth(),
            ...
        ];
    }
```
