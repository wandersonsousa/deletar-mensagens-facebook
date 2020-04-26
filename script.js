/**
 * Auto Delete All Facebook Photos
 *
 * @link   github.com/wandersonsousa
 * @author Wanderson Sousa <wandersonsousa3004@gmail.com>
 */


function initDelete(v = 800) {
    let $ = (sel) => { return document.querySelector(sel) }

    function findBtnToMenuDelete(){

        let btnOpenMenu = $('div[role="tabpanel"] .fbStarGrid li.fbPhotoStaulrGridElement a[data-tooltip="Editar ou remover"]')
        if( btnOpenMenu !== null ){
            btnOpenMenu.click()
            setTimeout( clickInOptDeleteThisPhoto , v)
        }else{
            console.log('There are no photos to delete')
        }
    }

    function clickInOptDeleteThisPhoto(){
        let btnDeletePhoto = $('a[data-action-type="delete_photo"]')
        
        if( btnDeletePhoto ){
            btnDeletePhoto.click()
            setTimeout( clickInBtnConfirmDelete, v * 2 )
        }else{
            console.log('Not found action delete photo')
        }
        

        
    }

    function clickInBtnConfirmDelete() {

        let btnConfirm = document.evaluate('//div[@role="dialog"]//button[contains(text(), "Excluir")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        
        if(btnConfirm){
            btnConfirm.singleNodeValue.click()

            if (null !== $('div[role="tabpanel"] ul.fbStarGrid li.fbPhotoStarGridElement a[data-tooltip="Editar ou remover"]')) {
                setTimeout( findBtnToMenuDelete, v * 3 )
            } else {
                console.log('No more photos to delete')
            }

        }else{
            console.log('Not Found Btn confirm role dialog')
        }    

        
    }


    findBtnToMenuDelete()
    
}

setTimeout(initDelete, 1000)
