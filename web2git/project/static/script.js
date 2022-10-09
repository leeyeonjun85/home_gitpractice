// marsPage
$(document).ready(function () {
    show_order();
});
function show_order() {
    $('#order-box').empty()
    $.ajax({
        type: 'GET',
        url: '/marsoder',
        data: {},
        success: function (response) {
            let rows = response['orders']
            for (let i = 0; i < rows.length; i++) {
                let name = rows[i]['name']
                let address = rows[i]['address']
                let size = rows[i]['size']

                let temp_html = `<tr>
                                    <td>${name}</td>
                                    <td>${address}</td>
                                    <td>${size}</td>
                                  </tr>`
                $('#order-box').append(temp_html)
            }

        }
    });
}

function save_order() {
    let name = $('#name').val()
    let address = $('#address').val()
    let size = $('#size').val()

    
    if (name == "") {
        alert("이름을 입력하세요");
    } if (address == "") {
        alert("주소를 입력하세요");
    } if (size == "-- 주문 평 수 --") {
        alert("주문 평수를 입력하세요");
    } else {
        $.ajax({
            type: 'POST',
            url: '/marsoder',
            data: { name_give:name, address_give:address, size_give:size },
            success: function (response) {
                alert(response['msg'])
                window.location.reload()
                }
        });
    }
}

// moviePage
$(document).ready(function(){
    listing();
  });

  function listing() {
      $('#cards-box').empty()
      $.ajax({
          type: 'GET',
          url: '/movie',
          data: {},
          success: function (response) {
              let rows = response['movies']
              for(let i = 0; i < rows.length; i++) {
                  let image = rows[i]['image']
                  let title = rows[i]['title']
                  let desc = rows[i]['desc']
                  let star = rows[i]['star']
                  let comment = rows[i]['comment']

                  let star_image = '⭐'.repeat(star)

                  let temp_html = `<div class="col">
                                      <div class="card h-100">
                                          <img src="${image}"
                                               class="card-img-top">
                                          <div class="card-body">
                                              <h5 class="card-title">${title}</h5>
                                              <p class="card-text">${desc}</p>
                                              <p>${star_image}</p>
                                              <p class="mycomment">${comment}</p>
                                          </div>
                                      </div>
                                  </div>`

                  $('#cards-box').append(temp_html)
              }
          }
      })
  }

  function posting() {
      let url = $('#url').val()
      let star = $('#star').val()
      let comment = $('#comment').val()

      $.ajax({
          type: 'POST',
          url: '/movie',
          data: {url_give: url, star_give: star, comment_give: comment},
          success: function (response) {
              alert(response['msg'])
              window.location.reload()
          }
      });
  }

  function open_box(){
      $('#post-box').show()
  }
  function close_box(){
      $('#post-box').hide()
  }

// bucketPage
$(document).ready(function () {
    show_bucket();
});
function show_bucket(){
    $.ajax({
        type: "GET",
        url: "/bucket",
        data: {},
        success: function (response) {
            let rows = response['buckets']
            for (let i = 0; i < rows.length; i++){
                let bucket = rows[i]['bucket']
                let num = rows[i]['num']
                let done = rows[i]['done']

                let temp_html = ``
                if (done == 0) {
                    temp_html = `<li>
                                    <h2>✅ ${bucket}</h2>
                                    <button onclick="done_bucket(${num})" type="button" class="btn btn-outline-primary">완료!</button>
                                </li>`
                } else {
                    temp_html = `<li>
                                    <h2 class="done">✅ ${bucket}</h2>
                                </li>`
                }
                $('#bucket-list').append(temp_html)
            }
        }
    });
}
function save_bucket(){
    let bucket = $('#bucket').val()

    $.ajax({
        type: "POST",
        url: "/bucket",
        data: {bucket_give:bucket},
        success: function (response) {
            alert(response["msg"])
            window.location.reload()
        }
    });
}
function done_bucket(num){
    $.ajax({
        type: "POST",
        url: "/bucket/done",
        data: {num_give:num},
        success: function (response) {
            alert(response["msg"])
            window.location.reload()
        }
    });
}

// pinklePage
$(document).ready(function () {
    show_comment();
});

$.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/weather/asan",
        data: {},
        success: function(response){
            let temp = response['temp']
            $('#temp').text(temp)
        }
    })

function save_comment() {
    let name = $('#name').val()
    let comment = $('#comment').val()

    $.ajax({
        type: "POST",
        url: "/homework",
        data: {'name_give': name, 'comment_give': comment},
        success: function (response) {
            alert(response["msg"])
            window.location.reload()
        }
    });
}

function show_comment() {
    $('#comment-list').empty()
    $.ajax({
        type: "GET",
        url: "/homework",
        data: {},
        success: function (response) {
            let rows = response['comments']
            for (let i = 0; i < rows.length; i++) {
                let name = rows[i]['name']
                let comment = rows[i]['comment']

                let temp_html = `<div class="card">
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>${comment}</p>
                                            <footer class="blockquote-footer">${name}</footer>
                                        </blockquote>
                                    </div>
                                </div>`
                $('#comment-list').append(temp_html)
            }
        }
    });
}