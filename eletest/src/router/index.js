import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// basic
import layout from '@/components/basic/layout'
import container from '@/components/basic/container'
import color from '@/components/basic/color'
import typography from '@/components/basic/typography'
import icon from '@/components/basic/icon'
import button from '@/components/basic/button'
// form
import radio from '@/components/form/radio'
import checkbox from '@/components/form/checkbox'
import input from '@/components/form/input'
import inputNumber from '@/components/form/inputNumber'
import select from '@/components/form/select'
import cascader from '@/components/form/cascader'
import switchEle from '@/components/form/switch'
import slider from '@/components/form/slider'
import timePicker from '@/components/form/timePicker'
import datePicker from '@/components/form/datePicker'
import dateTimePicker from '@/components/form/dateTimePicker'
import upload from '@/components/form/upload'
import rate from '@/components/form/rate'
import colorPicker from '@/components/form/colorPicker'
import transfer from '@/components/form/transfer'
import form from '@/components/form/form'
// data
import table from '@/components/data/table'
import tag from '@/components/data/tag'
import progress from '@/components/data/progress'
import tree from '@/components/data/tree'
import pagination from '@/components/data/pagination'
import badge from '@/components/data/badge'
// notice
import alert from '@/components/notice/alert'
import loading from '@/components/notice/loading'
import message from '@/components/notice/message'
import messageBox from '@/components/notice/messageBox'
import notification from '@/components/notice/notification'
// navigation
import navMenu from '@/components/navigation/navMenu'
import tabs from '@/components/navigation/tabs'
import breadCrumb from '@/components/navigation/breadCrumb'
import dropdown from '@/components/navigation/dropdown'
import steps from '@/components/navigation/steps'
// others
import dialog from '@/components/others/dialog'
import tooltip from '@/components/others/tooltip'
import popover from '@/components/others/popover'
import card from '@/components/others/card'
import carousel from '@/components/others/carousel'
import collapse from '@/components/others/collapse'

// animation.vue
import animateCom from '@/components/animations'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'animate',
      component: animateCom
    }, {
      path:'/layout',
      name:'layout',
      component:layout
    }, {
      path:'/container',
      name:'container',
      component:container
    }, {
      path:'/color',
      name:'color',
      component:color
    }, {
      path:'/typography',
      name:'typography',
      component:typography
    }, {
      path:'/icon',
      name:'icon',
      component:icon
    }, {
      path:'/button',
      name:'button',
      component:button
    }, {
      path:'/radio',
      name:'radio',
      component:radio
    }, {
      path:'/checkbox',
      name:'checkbox',
      component:checkbox
    }, {
      path:'/input',
      name:'input',
      component:input
    }, {
      path:'/inputNumber',
      name:'inputNumber',
      component:inputNumber
    }, {
      path:'/select',
      name:'select',
      component:select
    }, {
      path:'/cascader',
      name:'cascader',
      component:cascader
    }, {
      path:'/switch',
      name:'switch',
      component:switchEle
    }, {
      path:'/slider',
      name:'slider',
      component:slider
    }, {
      path:'/timePicker',
      name:'timePicker',
      component:timePicker
    }, {
      path:'/datePicker',
      name:'datePicker',
      component:datePicker
    }, {
      path:'/dateTimePicker',
      name:'dateTimePicker',
      component:dateTimePicker
    }, {
      path:'/upload',
      name:'upload',
      component:upload
    }, {
      path:'/rate',
      name:'rate',
      component:rate
    }, {
      path:'/colorPicker',
      name:'colorPicker',
      component:colorPicker
    }, {
      path:'/transfer',
      name:'transfer',
      component:transfer
    }, {
      path:'/form',
      name:'form',
      component:form
    }, {
      path:'/table',
      name:'table',
      component:table
    }, {
      path:'/tag',
      name:'tag',
      component:tag
    }, {
      path:'/progress',
      name:'progress',
      component:progress
    }, {
      path:'/tree',
      name:'tree',
      component:tree
    }, {
      path:'/pagination',
      name:'pagination',
      component:pagination
    }, {
      path:'/badge',
      name:'badge',
      component:badge
    }, {
      path:'/alert',
      name:'alert',
      component:alert
    }, {
      path:'/loading',
      name:'loading',
      component:loading
    }, {
      path:'/message',
      name:'message',
      component:message
    }, {
      path:'/messageBox',
      name:'messageBox',
      component:messageBox
    }, {
      path:'/notification',
      name:'notification',
      component:notification
    }, {
      path:'/navMenu',
      name:'navMenu',
      component:navMenu
    }, {
      path:'/tabs',
      name:'tabs',
      component:tabs
    }, {
      path:'/breadCrumb',
      name:'breadCrumb',
      component:breadCrumb
    }, {
      path:'/dropdown',
      name:'dropdown',
      component:dropdown
    }, {
      path:'/steps',
      name:'steps',
      component:steps
    }, {
      path:'/dialog',
      name:'dialog',
      component:dialog
    }, {
      path:'/tooltip',
      name:'tooltip',
      component:tooltip
    }, {
      path:'/popover',
      name:'popover',
      component:popover
    }, {
      path:'/card',
      name:'card',
      component:card
    }, {
      path:'/carousel',
      name:'carousel',
      component:carousel
    }, {
      path:'/collapse',
      name:'collapse',
      component:collapse
    }, {
      path:'*',
      name:'error',
      component:animateCom
    }
  ]
})
