from bs4 import BeautifulSoup
import requests
from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
client = MongoClient(
    'mongodb+srv://yeonjundb:67146714@cluster0.jsmujdq.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

app = Flask(__name__)


# 홈페이지

@app.route('/')
def index():
    return render_template('index.html')


# 화성땅 공동구매


@app.route('/mars')
def mars():
    return render_template('mars.html')


@app.route("/marsoder", methods=["POST"])
def mars_post():
    name_receive = request.form['name_give']
    address_receive = request.form['address_give']
    size_receive = request.form['size_give']

    doc = {
        'name': name_receive,
        'address': address_receive,
        'size': size_receive
    }

    db.mars.insert_one(doc)
    return jsonify({'msg': '주문 완료!'})


@app.route("/marsoder", methods=["GET"])
def mars_get():
    orders_list = list(db.mars.find({}, {'_id': False}))
    return jsonify({'orders': orders_list})

# 무비디아


@app.route('/moviedia')
def moviedia():
    return render_template('moviedia.html')


@app.route("/movie", methods=["POST"])
def movie_post():
    url_receive = request.form['url_give']
    star_receive = request.form['star_give']
    comment_receive = request.form['comment_give']

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(url_receive, headers=headers)

    soup = BeautifulSoup(data.text, 'html.parser')

    og_image = soup.select_one('meta[property="og:image"]')
    og_title = soup.select_one('meta[property="og:title"]')
    og_description = soup.select_one('meta[property="og:description"]')

    image = og_image['content']
    title = og_title['content']
    description = og_description['content']

    doc = {
        'image': image,
        'title': title,
        'desc': description,
        'star': star_receive,
        'comment': comment_receive
    }

    db.movies.insert_one(doc)

    return jsonify({'msg': '기록 완료!'})


@app.route("/movie", methods=["GET"])
def movie_get():
    movies_list = list(db.movies.find({}, {'_id': False}))
    return jsonify({'movies': movies_list})

# 버킷리스트


@app.route('/bucketlist')
def bucketlist():
    return render_template('bucketlist.html')


@app.route("/bucket", methods=["POST"])
def bucket_post():
    bucket_receive = request.form['bucket_give']

    bucket_list = list(db.bucket.find({}, {'_id': False}))
    count = len(bucket_list)+1

    doc = {
        'num': count,
        'bucket': bucket_receive,
        'done': 0
    }
    db.bucket.insert_one(doc)

    return jsonify({'msg': '등록완료'})


@app.route("/bucket/done", methods=["POST"])
def bucket_done():
    num_receive = request.form['num_give']
    db.bucket.update_one({'num': int(num_receive)}, {'$set': {'done': 1}})

    return jsonify({'msg': '버킷 완료!'})


@app.route("/bucket", methods=["GET"])
def bucket_get():
    bucket_list = list(db.bucket.find({}, {'_id': False}))

    return jsonify({'buckets': bucket_list})

# 팬명록


@app.route('/panlog_pinkle')
def panlog_pinkle():
    return render_template('panlog_pinkle.html')

@app.route("/homework", methods=["POST"])
def homework_post():
    name_receive = request.form["name_give"]
    comment_receive = request.form["comment_give"]

    doc = {
        'name': name_receive,
        'comment': comment_receive
    }

    db.homework.insert_one(doc)
    return jsonify({'msg': '응원 완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
    comment_list = list(db.homework.find({}, {'_id': False}))
    return jsonify({'comments': comment_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
