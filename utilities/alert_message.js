const getAlertMessage = () => {
  const UIAlertDiv = document.createElement('div');
  const html = `<div class="alert alert-danger">
  <a class="close" data-dismiss="alert">×</a>
  All fields are required. Please fill out the form to proceed!
              <img src="close.soon" style="display:none;" onerror="(function(el){ setTimeout(function(){ el.parentNode.parentNode.removeChild(el.parentNode); },3000 ); })(this);" />
              </div>`;
  UIAlertDiv.innerHTML = html;
  return UIAlertDiv;
};

export default getAlertMessage;
