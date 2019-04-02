<template>
    <div class="container">
        <div class="split left">
            <carousel v-for="slide in carousel" :key="slide.id">
                <slide style="margin-top: -10px;">
                    <img :src="slide.img">
                    <h1>{{slide.title}}</h1>
                    <p>{{slide.desc1}} <br> 
                        {{slide.desc2}}</p>
                </slide>
            </carousel>
        </div>
        <div class="split right">
            <div class="form">
                <div class="form-header" style="text-align: center;">
                    <img :src="form.header.image">
                    <p  style="font-weight: bolder; font-size: 20px;">{{form.header.header}}</p>
                    <p>{{form.header.content}}</p>
                </div>
                <label for="fname">{{form.body.email}}</label>
                <input type="text" id="fname" name="email" >
                <label for="fname">{{form.body.password}}</label>
                <input type="text" id="fname" name="password" >
                <router-link to='/home'> <input type="submit" value="Login"> </router-link>
                <br>
                <label for="fname">{{form.body.msg}} <router-link to='/register'><a href="">Register</a></router-link> </label>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data: function() {
    return  {
      carousel : [
        {
          id: 1, 
          title: 'Read Books',
          img: 'https://img.icons8.com/nolan/100/000000/book.png',
          desc1: 'Create your account to get started.',
          desc2: 'After that, you can share books and make friends.'
        },
        {
          id: 2,
          title: 'Review Them',
          img: 'https://img.icons8.com/nolan/100/000000/star.png',
          desc1: 'Create your account to get started.',
          desc2: 'After that, you can share books and make friends.'
        }
      ],
      form :  {
        header: {
          image: 'https://img.icons8.com/dusk/128/000000/idea.png',
          header: 'Welcome!',
          content: 'Login your account to get started. After that, you can remain awesome!'
        },
        body: {
          email: 'EMAIL',
          password: 'PASSWORD',
          retype: 'TYPE PASSWORD AGAIN',
          msg: 'ALREADY HAVE AN ACCOUNT?'
        }
      }
    };
  },
  components: {
    Carousel,
    Slide
  }
}
</script>