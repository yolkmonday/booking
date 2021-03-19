<template>
  <div>
    <div class="container mx-auto">
      <div class="py-4 flex items-center">
      <div class="w-1/2 ml-12">
      <button class="border rounded-full text-xs px-4 focus:outline-none">EN</button>
        <button class="border rounded-full text-xs px-4 focus:outline-none">TL</button>
      </div>
      <div class="w-1/2 text-right inline-block">
      
    <div @click.prevent="isShowLogin=true" class="text-xs mr-12 flex cursor-pointer items-center float-right">
      <div>
      <svg class="h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 9.761v-4.761c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.525-1.173-4.773-3-6.239zm-5 8.239c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm3-9.413c-.927-.376-1.938-.587-3-.587s-2.073.211-3 .587v-3.587c0-1.654 1.346-3 3-3s3 1.346 3 3v3.587z"/></svg>
      </div>
      <div>LOGIN / SIGN UP</div>
      </div>
       
      </div>
    </div>
    <div class="absolute  text-white flex container clearfix">
      <div class="float-left w-6/12 p-10">
        <nuxt-link to="/">
      <img class="h-10" src="~assets/svg/logo.svg" alt="">
        </nuxt-link>
      </div>
      <div class="float-right flex items-center ml-16">
        <ul>
        <li class="inline-block pr-2 text-xs"><a href="/"> Find opportunities
</a></li>
        <li class="inline-block pr-2 text-xs"><a href="#"> Location that love by Travellers
</a></li>
        <li class="inline-block pr-10 text-xs"><a href="#"> Houses Apartements Inc.
</a></li>
      </ul>

      </div>
      
    </div>
 
<!-- slider -->
    <div style="height:600px;" class="flex transition-opacity">
      <div class="bg-white w-10 -ml-10 flex items-center">
        <div class="cursor-pointer transform -rotate-90">
          <span class="font-bold text-sm text-gray-600">PREV</span>
        </div>
      </div>
      <div class="flex items-center">
        <div class="absolute container flex items-center" style="height:600px;">
          <div class="text-center w-full">
            <span class="mx-auto font-bold text-5xl text-white block">
            Rotterdam
          </span>
          <span class="text-white block">
            EXCELLENT OPPORTUNITY
          </span>
          </div>
          
        </div>
         <img src="/assets/img/8-min.jpg" style="height:600px" class="w-full object-cover" alt="">   
      </div>
 
      <div class="bg-white w-10 flex items-center cursor-pointer ">
        <div class="transform rotate-90">
         <span class="font-bold text-sm text-gray-600">NEXT</span>
        </div>
      </div>
    </div>
    <!-- end slider -->

    <div style="max-width:910px;" class="mx-auto">
      <!-- SEARCH -->
      <div style="margin-top:-100px" class="flex mx-auto gap-2">
        <div class="w-9/12 flex flex-col">
          <div class="w-full" style="height:68px">
            <div class="absolute flex items-center ml-4" style="height:68px">
 <svg fill="#bdbcbd" class="h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
           
            </div>
            <input type="text" class="bg-purple-dark focus:outline-none placeholder-gray-500 placeholder-opacity-10 h-full w-full text-gray-500 pl-16 text-loose"
              placeholder="DESTINATION / HOTEL NAME">
              
          </div>
          <div class="grid grid-cols-4 bg-purple-light" style="height: 120px">
            <div class="text-center p-4 text-white mx-auto">
              <span  class="text-xs">CHECK-IN</span>
              <div class="flex mx-auto items-center">
                <div>
                  <span class="text-5xl font-title font-light">{{date.getDate()}}</span>
                </div>
                <div class="text-left text-xs bottom-0 ml-2">
                   <span class="block">
                    {{date.getMonth() | month}}
                  </span>
                  <span class="block">
                    {{date.getFullYear()}}
                  </span>
                </div>
              </div>
            </div>

            <div class="text-center p-4 text-white mx-auto">
              <span class="text-xs">CHECK-OUT</span>
              <div class="flex mx-auto items-center">
                <div>
                  <span class="text-5xl font-title font-light">{{date.getDate()+6}}</span>
                </div>
                <div class="text-left text-xs bottom-0 ml-2">
                  <span class="block">
                    {{date.getMonth() | month}}
                  </span>
                  <span class="block">
                    {{date.getFullYear()}}
                  </span>
                </div>
              </div>
            </div>

            <div class="text-center p-4 text-white mx-auto">
              <span  class="text-xs">ADULTS</span>
              <div class="flex">
                <div>
                  <span class="text-5xl font-title font-light">{{adults}}</span>
                </div>
                <div class="flex flex-col items-center m-auto">
                  <button class="focus:outline-none pl-3" @click.prevent="adults=adults+1">+</button>
                  <button class="focus:outline-none pl-3" @click.prevent="adults=adults-1">-</button>
                </div>


              </div>
            </div>

            <div class="text-center p-4 text-white mx-auto">
              <span class="text-xs">CHILDREN</span>
              <div class="flex">
                <div>
                  <span class="text-5xl font-title font-light">{{childrens}}</span>
                </div>
               <div class="flex flex-col items-center m-auto">
                  <button class="focus:outline-none pl-3" @click.prevent="childrens=childrens+1">+</button>
                  <button class="focus:outline-none pl-3" @click.prevent="childrens=childrens-1">-</button>
                </div>


              </div>
            </div>

          </div>

        </div>
        <div class="w-3/12 bg-orenji flex items-center">
        <div class="w-full mx-auto">
           <span class="text-white w-full tracking-widest font-title  text-center block">
            SHOW OFFERS
          </span>
         <svg class="h-4 mt-4 mx-auto animate animate-bounce transform rotate-90" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        </div>
         
        </div>
      </div>
      <!-- SEARCH -->
      <!-- kota -->
      <div style="height:90px;" class="flex items-center px-4">
           <ul class="mx-auto">
          <li class="text-sm inline-block pr-10 text-gray-500">BUDAPEST</li>
          <li class="text-sm inline-block pr-10 text-gray-500">MUNICH</li>
          <li class="text-sm inline-block pr-10 text-gray-500">BUKRES</li>
          <li class="text-sm inline-block pr-10 text-gray-500">ROMA</li>
          <li class="text-sm inline-block pr-10 text-gray-500">PARIS</li>
          <li class="text-sm inline-block pr-10 text-gray-500">BARCELONA</li>
         <li class="text-sm inline-block pr-10 text-gray-500">TURKYE</li>

        <li class="text-sm inline-block font-bold text-purple-dark underline">OTHER DESTINATION</li>
        </ul>
       
      </div>
      <!-- kota -->
      <div class="h-12"></div>

<section>
        <div class="flex flex-wrap">
          <div class="w-1/3">
            <div class="h-full w-full bg-cover" style="background-image: url('/assets/img/3-min.jpg')">
            <div class="h-full p-4 flex items-end">
              <div>
                  <span class="font-bold text-white text-2xl block">
              VENICE
            </span>
            <span class="text-white block">ITALIA</span>
              </div>
              
            </div>
            
            </div>
          </div>
          <div class="w-1/3 h-auto px-4">
            <div class="mb-4"><img class="object-cover h-56 w-full" src="/assets/img/13-min.jpg" alt="">
            <div class="absolute -mt-20 pl-4">
                  <span class="font-bold text-white text-2xl block">
              TOKYO
            </span>
            <span class="text-white block">JAPAN</span>
              </div>
              
            </div>
            <div><img class="object-cover h-56 w-full" src="/assets/img/10-min.jpg" alt="">
             <div class="absolute -mt-20 pl-4">
                  <span class="font-bold text-white text-2xl block">
              MAY BAY
            </span>
            <span class="text-white block">THAILAND</span>
              </div>
            </div>
          </div>
           <div class="w-1/3">
            <div class="h-full w-full bg-cover" style="background-image: url('/assets/img/2-min.jpg')">
            <div class="h-full p-4 flex items-end">
              <div>
                  <span class="font-bold text-white text-2xl block">
              MALAGA
            </span>
            <span class="text-white block">ESPANA</span>
              </div>
              
            </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-1/3">
            <div class="h-full w-full bg-cover" style="background-image: url('/assets/img/5-min.jpg')">
            <div class="h-full p-4 flex items-end">
              <div>
                  <span class="font-bold text-white text-2xl block">
              AMSTERDAM
            </span>
            <span class="text-white block">NETHERLAND</span>
              </div>
              
            </div>
            
            </div>
          </div>
          <div class="w-1/3 h-auto px-4">
            <div class="mb-4"><img class="object-cover h-56 w-full" src="/assets/img/6-min.jpg" alt="">
            <div class="absolute -mt-20 pl-4">
                  <span class="font-bold text-white text-2xl block">
              VENICE
            </span>
            <span class="text-white block">ITALIA</span>
              </div>
              
            </div>
            <div><img class="object-cover h-56 w-full" src="/assets/img/8-min.jpg" alt="">
             <div class="absolute -mt-20 pl-4">
                  <span class="font-bold text-white text-2xl block">
              ROTTERDAM
            </span>
            <span class="text-white block">NETHERLAND</span>
              </div>
            </div>
          </div>
           <div class="w-1/3">
            <div class="h-full w-full bg-cover" style="background-image: url('/assets/img/7-min.jpg')">
            <div class="h-full p-4 flex items-end">
              <div>
                  <span class="font-bold text-white text-2xl block">
              JAKARTA
            </span>
            <span class="text-white block">INDONESIA</span>
              </div>
              
            </div>
            </div>
          </div>
        </div>
      </section>


      <div class="h-16"></div>
      <!-- last booking -->
      <div class="flex">
        <div style="width:568px" class="bg-gray-200">
        <div class="w-16 h-16 bg-white"></div>
        <img src="/assets/img/3-min.jpg" class="object-cover w-full" style="height:360px" alt="">
        </div>
        <div style="width:342px;height:358px" class="flex bg-gray-200 p-6 flex-col">
        <div class="my-auto">
           <div class="w-full">
            <span class="text-title font-title font-bold block leading-10 text-purple-three">
              LAST<br>BOOKINGS
            </span>
            <div class="pt-4 pb-6">
              <svg width="200" height="4" viewBox="0 0 200 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="2" fill="#C4C4C4"/>
</svg>

            </div>
          </div>
          <div class="w-full">
            <div class="grid grid-cols-2 py-4">
              <div>
                <span class="text-xs">A USER GERMANY</span>
              </div>
              <div class="text-right">
                <span class="text-xs">08.10.2015</span>
              </div>
            </div>
          </div>

          <div class="w-full">
            <span class="text-xs leading-4 text-gray-600">Hampton Court Palace Hotel has for ondon The title book in advance.</span>
            
          </div>
          <div class="mt-24 absolute flex flex-row gap-2">
            <div class="transform rotate-180">
              <svg class="h-4" xmlns="http://www.w3.org/2000/svg" width="24" fill="#C4C4C4" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
            </div>
            <div>
              <svg class="h-4" xmlns="http://www.w3.org/2000/svg" width="24" fill="#C4C4C4" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
            </div>
            
          </div>
        </div>
         


        </div>
      </div>
<!-- last booking -->
<div class="h-24"></div>
<!-- malaga -->
<div class="flex">
  <div class="w-5/12">
  <div class="p-12">
    <span class="font-bold font-title font-bold text-xl block">
    IS THAT STILL HAVE NOT<br> DECIDED WHERE TO GO ?
  </span>
  <div class="pt-4 pb-6">
     <svg width="200" height="4" viewBox="0 0 200 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="2" fill="#C4C4C4"/>
</svg>
  </div>
  <span class="block my-6 text-gray-600">
    We want to make decision !<br>
    Our verified guest rating allows you to find the perfect accomodation.
  </span>
  <button class="text-purple-three rounded-full py-2 px-6 border-2 border-purple-three text-sm hover:text-white hover:bg-purple-three">SHOW ALL</button>
  </div>
  <div class="flex absolute gap-2" >
    <div>
      <img src="/assets/img/4-min.jpg" style="height:160px;width:264px" class="object-cover" alt="">
    </div>
    <div class="shadow-lg">
      <img src="/assets/img/5-min.jpg" style="height:160px;width:264px" class="object-cover" alt="">
    </div>
    
    
  </div>
  

  </div>

  <div class="w-7/12" style="background:url('/assets/img/2.png');    background-size: cover;;height:560px">
  <div class="absolute transform -rotate-180 -mt-12">
    <span class="text-lg px-8" style="writing-mode: vertical-rl;text-orientation: mixed;">
      NOW TAKE PLACE
    </span>
       
  </div>
  <div class="text-right p-8">
    <span class="w-full text-xs font-bold text-white rounded-full px-2 border border-white py-1">72 BED AND BREAKFAST</span>
  </div>

  </div>
</div>
<!-- malaga -->

    </div>

 </div>
  
    <div style="background: url(/bg-footer.png) center bottom no-repeat;">
<div class="h-20"></div>

<div class="flex mx-auto" style="width:910px">
  <div class="w-6/12 p-10">
  <span class="text-title font-title font-bold block text-purple-three">
              NEWSLETTER<br>SIGNUP
            </span>
            <span class="text-gray-500">Only member our special <br>secret Opportunities earn a 50% discount<br> on your next trip.</span>
  </div>
   <div class="w-6/12 flex items-center">
   <div>
     <input type="text" class="border-b placeholder-gray-300 bg-transparent border-b-2 text-5xl focus:outline-none" placeholder="E-mail address">
   </div>
   <div class="bg-gray-700 p-4 rounded-full mt-12">
     <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
   </div>
   
   </div>
</div>

<div class="h-12"></div>

    <!-- footer -->
    <div class="bg-white  p-12 container mx-auto">
      <div class="flex">
        <div class="w-3/12">
        <span class="text-title font-bold block">About</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet sapiente consectetur aliquid deserunt.</span>
        </div>

        <div class="w-8/12">
        <div class="grid grid-cols-4 text-sm">
          <div></div>

          <div>
            <ul>
              <li>Countries</li>
              <li>Regions</li>
              <li>Cities</li>
              <li>Neighborhoods</li>
              <li>Airports</li>
              <li>Hotels</li>
              <li>Landmark</li>
            </ul>
          </div>

           <div>
            <ul>
              <li>The apartements</li>
              <li>Resorts</li>
              <li>Villas</li>
              <li>Hostels</li>
              <li>Bed and Breakfasts</li>
              <li>Inns</li>
              <li>Hotel chains</li>
              <li>All property types</li>
              <li>All themes</li>
              <li>All destinations</li>
              <li>Reviews</li>
            </ul>
          </div>

           <div>
            <ul>
              <li>On Booking.co</li>
              <li>Car rental</li>
              <li>I Villas.co</li>
              <li>The Seeker:Travel</li>
              <li>FAQ</li>
              <li>Careers</li>
              <li>Terms & Conditions</li>
              <li>Cookies and Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      <div class="mt-20 flex text-xs">
        <div class="flex-auto">
          <ul >
            <li class="inline-block pr-8"> Make Reservations</li>
            <li class="inline-block pr-8"> Customer Service</li>
            <li class="inline-block pr-8"> Become Partners</li>
            <li class="inline-block pr-8"> Booking.com bussiness</li>
            <li class="inline-block pr-8"> Add your plan</li>
          </ul>
        </div>
        <div>
          <span>
            &copy; 1996 - 2021 Booking.co / All right reserved.
          </span>
        </div>
      </div>
      
    </div>
    <div class="h-12"></div>
    <!-- footer -->
<login-modal v-if="isShowLogin" @close="close" @signUp="signUp" />
<sign-up-modal v-if="isSignUp" @close="close" />
</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      childrens: 3,
      adults: 3,
      isShowLogin: false,
      isSignUp: false,
      date: new Date()
    }
  },
  methods: {
    close() {
      this.isShowLogin = false
      this.isSignUp = false
    },
    signUp() {
      this.isShowLogin = false
      this.isSignUp = true
    }
  }
}
</script>