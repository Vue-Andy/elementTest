<template>
  <div>
    <!-- <h1>专辑名称：{{hktk.albumname}}</h1>
    <h6>歌曲名称：{{hktk.songname}}-----演唱者：{{hktk.singer}}</h6>
    <img :src="hktk.albumUrl" alt="">
    <audio :src="hktk.audioUrl" controls></audio>
    <div class='musicBox'>
      <h1>top 100 music</h1>
      <ul>
        <li v-for='(item,index) in musicListByPage' :key='index' @click='getUrl(e,item.audioUrl)'>
          <h1>{{index+1}}、专辑名称：{{item.albumname}}</h1>
          <h6>歌曲名称：{{item.songname}}-----演唱者：{{item.singer}}</h6>
          <div>
            <img :src="item.albumUrl" alt="">
          </div>
          <audio :src="item.audioUrl" controls></audio>
        </li>
      </ul>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[5, 10, 25]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination> -->
    <JxzjButton typeSwitch display @change='handleSwitch' :activeValue='1' :inactiveValue='0' size='medium'></JxzjButton>  <!--开关-->
    <JxzjButton :iconSrc='iconSrc' display></JxzjButton>  <!--图标按钮-->
    <JxzjButton display>文字按钮</JxzjButton>  <!--文字按钮-->
    <JxzjButton display plain>文字按钮</JxzjButton>  <!--白色文字按钮-->
    <JxzjButton display plain addIcon>文字按钮</JxzjButton>  <!--白色文字按钮带图标-->
    <JxzjButton display type='text'>文字按钮</JxzjButton>  <!--纯文字文本，可点击-->
  </div>
</template>

<script>
// import axios from 'axios'

import JxzjButton from "../../jxzj-ui/button/button.vue";
import logo from '../../assets/logo.png'
import { getMusicByName, getToken,typeNum } from '../../utils/api'
export default {
  name:'buttonCon',
  data(){
    return {
      hktk:{
        albumname:'',
        songname:'',
        singer:'',
        albumUrl:'',
        audioUrl:'',
      },
      musicList:[],
      musicListByPage:[],
      defaultUrl:'',
      // 分页字段
      currentPage:1,
      pageSize:10,
      iconSrc:logo
    }
  },
  components:{
    JxzjButton
  },
  methods:{
    // 根据歌曲名获取歌曲
    getMusicByName(url,callback){
      let hostUrl = '/api'+ url
      this.$http.get(hostUrl).then((res)=>{
        if(res.ok){
          callback(JSON.parse(res.body.slice(9,-1)).data)
        }
      })
    },
    // 获取token
    getToken(url,callback){
      let hostUrl = '/api'+ url
      this.$http.get(hostUrl).then((res)=>{
        if(res.ok){
          callback(res.body.data)
        }
      })
    },
    // 获取音乐排行榜前100  --- /v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923
    getTop100Music(url,callback){
      let hostUrl = '/api'+ url
      this.$http.get(hostUrl).then((res)=>{
        // console.log(res)
        if(res.ok){
          callback(res.body.songlist)
        }
      })
    },
    handleSizeChange(val){
      this.pageSize = val
      this.musicListByPage = this.musicList.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage)
    },
    handleCurrentChange(val){
      // console.log(val)
      this.currentPage = val
      this.musicListByPage = this.musicList.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage)
    },
    palyAudio(e){
      console.log(e)
      e.target.play()
    },
    getUrl(e,url){
      console.log(e.target)
      e.target.src = url
    },
    handleSwitch(val) {
      console.log(val)
    }
  },
  created(){
    var that = this
    // 获取海阔天空
    that.getMusicByName('/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=1&w=海阔天空',function(data){
      // console.log(data)
      let obj = data.song.list[0]
      that.hktk.albumname = obj.albumname
      that.hktk.songname = obj.songname
      that.hktk.singer = obj.singer[0].name
      let albumid = obj.albumid
      that.hktk.albumUrl = 'http://imgcache.qq.com/music/photo/album_300/17/300_albumpic_'+ albumid+'_0.jpg'
      let songmid = obj.songmid
      let filename = 'C400' + songmid + '.m4a'
      let tokenUrl = 'base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=' + songmid + '&filename=' + filename + '&guid=126548448'
      // that.getToken('base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=003lghpv0jfFXG&filename=C400003lghpv0jfFXG.m4a&guid=126548448',function(data){
      that.getToken(tokenUrl,function(data){
        // console.log(data)
        let token = data.items[0].vkey
        // console.log(token)
        that.hktk.audioUrl = 'http://ws.stream.qqmusic.qq.com/' + filename + '?fromtag=0&guid=126548448&vkey=' + token
      })
    })
    // 获取top100
    that.getTop100Music('/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923',function(data){
      // console.log(data)
      for(var i in data){
        let obj = data[i].data
        let albumname = obj.albumname
        let songname = obj.songname
        let singer = obj.singer[0].name
        let albumUrl ='http://imgcache.qq.com/music/photo/album_300/17/300_albumpic_'+obj.albumid + '_0.jpg'
        let songmid = obj.songmid
        let filename = 'C400' + songmid + '.m4a'
        let tokenUrl = 'base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=' + songmid + '&filename=' + filename + '&guid=126548448'
        that.getToken(tokenUrl,function(data){
          // console.log(data)
          let token = data.items[0].vkey
          // console.log(token)
          let audioUrl = 'http://ws.stream.qqmusic.qq.com/' + filename + '?fromtag=0&guid=126548448&vkey=' + token
          let songObj = {
            albumname:albumname,
            songname:songname,
            singer:singer,
            albumUrl:albumUrl,
            audioUrl:audioUrl
          }
          that.musicList.push(songObj) 
          that.musicListByPage = that.musicList.slice(0,10)
        })
      }
    })
  },
  mounted(){
    // var that = this
    // this.getMoiveList('/supplier/supplierList')  //?city="广州"&count=10&start=0
    // QQ音乐
    /**
    * p：页数，从1开始
    * n：每一页显示的条数
    * w：搜索关键字 
    */
    typeNum(123)
  }
}
</script>

<style>
li{list-style: none;}
.musicBox{
  margin-bottom:30px;
  text-align:left;
  height:500px;
  overflow:auto;
  background:coral;
  padding:30px;
}
.musicBox::-webkit-scrollbar{
  display:none;
}
</style>


