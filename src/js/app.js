const car__select= $('#car__select')
const choose__select = $('#choose__select')

$('#car__select').addEventListener('change', ()=>{
    show();
    getValueCar()
})
 function getValueCar() {
        var car = car__select.value;
        return car;
    }
$('#choose__select').addEventListener('change', ()=>{
    show();
    getValueMoney();
    
})
function getValueMoney() {
        var money = choose__select.value;
        return money;
    }
function showCar() {
    const html = app.car.map((e, index) => {
        return `
        <option class="box__option"  value="${e.dungtich}">${e.name}</option>
        `
    })
    car__select.innerHTML = html.join('')
}

function showMoney() {
    const html = app.money.map((e, index) => {
        return `
        <option class="box__option"  value="${e.value}">${e.title}</option>
        `
    })

    choose__select.innerHTML = html.join('')

}


function show() {
    var money = choose__select.value;
    const giaxang = pvoil[0].price;
    const litxang = Number(money / giaxang)
    const car = getValueCar();
    const doduoc = Number(litxang).toFixed(2)
    render()

}


function render() {
    var e = car__select
    var giatri = e.options[e.selectedIndex].index;
    const giaxang = pvoil[0].price;
    var money = choose__select.value;
    const litxang = Number(money / giaxang).toFixed(2)
    const full = Number(giaxang * (app.car[giatri].dungtich)).toFixed(2)
    const html = `
    <div class="course-preview">
    <img src="${app.car[giatri].img}" alt="">
  </div>
  <div class="course-info"> 
    <div class="progress-container">
   
    </div>
    <h2>${app.car[giatri].name}</h2>
    <p>Dung tích bình xăng xe 
    <span class="red">${app.car[giatri].name}</span> là 
    <span class="red">${app.car[giatri].dungtich } Lít</span>  với 
    <span class="red">${money}K</span> bạn sẽ đỗ được 
    <span class="red">${litxang} Lít  Xăng</span>  </p>
    <button class="btn" id="full">Đỗ Đầy Bình</button>

  </div>
        
        `
    //document.body.style.backgroundImage = `url('${app.car[giatri].img}')`;
    $('#course').innerHTML = html
    const btnFull = $('#full').addEventListener('click', () => {
        alert(`Cần ${full}K thì bạn sẽ đổ được đầy bình`)
    });
}

function main() {
    showCar()
    showMoney()
    show()
}

main()