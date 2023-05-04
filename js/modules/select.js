export default function selectList() {
    const tabMenu = document.querySelectorAll('.btn-vendas');
    const tabContent = document.querySelectorAll('#img-vendas');
    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
    
        tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        }) 
    })
    
    
}

