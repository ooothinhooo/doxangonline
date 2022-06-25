const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const root = `
<div class="container box ">
<div class="row">
  <div class="col col-md-auto">
    <div class=" child" id="car">
      <select class="box__select car"  id="car__select" onchange="getValueCar(), show()">
        </select>
    </div>
  </div>
  <div class="col col-md-auto">
    <div class="choose child" id="choose">
      <select class="box__select "  id="choose__select" onchange="getValueMoney(), show()">
      </select>
    </div>
  </div>
</div>
</div>
<div class="courses-container">
<div class="course" id="course">
<!-- <div class="course-preview">
<img src="https://source.unsplash.com/KUfkX6gVwBU/600x400" alt="">
</div>
<div class="course-info">
<div class="progress-container">
<div class="progress"></div>
<span class="progress-text">
  6/9 Challenges
</span>
</div>
<h6>Chapter 4</h6>
<h2>Callbacks & Closures</h2>
<button class="btn" id="full">Đỗ Đầy Bình</button>
</div> -->
</div>
</div>
<p class ="title">Giá xăng được sữ dụng tính là: ${pvoil[0].price.toFixed(3)} VNĐ</p>

`;
$('#root').innerHTML = root;
