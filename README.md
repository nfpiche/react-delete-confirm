## REACT DELETE CONFIRM

This is a reusable React component that you can tie to a delete method.  If you've ever delete a repository from Github you are familiar with what this is for!  Upon clicking the main button a user will be presented with a modal and an input, they'll need to type the name of what they want to delete exactly in order to go through with the deletion.

## INSTALLATION

This is availble through npm, just run ```npm install react-delete-confirm```

## EXAMPLE

```javascript
  import DeleteConfirm from 'react-delete-confirm'

  <DeleteConfirm
    deleteMethod={yourDeleteMethod}
    name={nameToDelete}
    modalClass={yourCustomModalClass}
    buttonClass={yourCustomButtonClass}
  />
```

## PROPS
  * *deleteMethod* (required)
      * The method you would like to trigger that will delete the item
  * *name* (require)
      * The name of the item you would like to delete
  * *modalClass* (optional)
      * The class you would like to apply to the modal (recommended)
  * *buttonClass* (optional)
      * The class you would like to apply to the buttons (recommended)
