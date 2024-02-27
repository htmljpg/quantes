import CopyToClipboard from '../../../plugins/CopyToClipboard';
import SelectBox from '../../../plugins/SelectBox';

const CabinetHomePage = () => {
    const typeOfActionSelectSelector = document.getElementById('typeOfActionSelect');
    const select = typeOfActionSelectSelector && new SelectBox(typeOfActionSelectSelector, {
        on: {
            open: function(){
                
            },
            close: function(){

            },
            select: function(option){

            }
        }
    });

    new CopyToClipboard({
        elementById: 'copyPartnerLink'
    });
}

export default CabinetHomePage;