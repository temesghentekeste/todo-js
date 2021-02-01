import getCurrentYear from '../../utilities/curren_year';

const getFooter = () => {
  const footer = document.createElement('footer');

  const html = `
          <div>
            <p>Copyright &copy; ${getCurrentYear()}  Temesghen Tekeste, All Rights Reserved</p>
          </div>`;
  footer.innerHTML = html;
  return footer;
};

export default getFooter;
