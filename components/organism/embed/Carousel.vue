<template>
  <div>
    <!-- CAROUSEL -->
    <div class="h-screen w-full overflow-hidden relative">
      <div class="flex items-center">
        <div @click="previousSlide()">
          <V-Icon
            icon="chevron-left"
            color="white"
            class="absolute ml-8 cursor-pointer opacity-50 iconCarousel"
            size="1x"
            type="outline"
            colorBackground="white"
            style="z-index: 99999"
          />
        </div>
        <div
          class="sliders flex relative"
          :style="{ width: carouselWidth + 'px' }"
        >
          <!-- <div class="bg-gray-800 opacity-75 h-screen w-full absolute z-40"></div> -->
          <div
            v-for="(component, index) in components"
            :key="index"
            class="slide"
            :ref="'slide-' + index"
            style="transition: 1s"
            :style="{ width: slideWidth + 'px' }"
            :class="popUp ? 'cursor-pointer' : null"
            @click="popUp ? (showPopUp = true) : null"
          >
            <component
              :is="component.type"
              :type="component.props.type"
              :color="component.props.color"
              :name="component.props.name"
              :rounded="component.props.rounded"
              :text="component.props.text"
              :label="component.props.label"
              :placeholder="component.props.placeholder"
              :align="component.props.align"
              :marginTop="component.props.marginTop"
              :marginBottom="component.props.marginBottom"
              :image="component.props.image"
              :parentName="component.props.parentName"
              :height="component.props.height"
              :parallax="component.props.parallax"
              :combinations="component.props.combinations"
              :components="component.props.components"
              :onClick="component.props.onClick"
              :textAlign="component.props.textAlign"
              :icon="component.props.icon"
              :size="component.props.size"
              :wrapper="component.props.wrapper"
              :colorBackground="component.props.colorBackground"
              :cover="component.props.cover"
            ></component>
          </div>
        </div>

        <div @click="nextSlide()">
          <V-Icon
            icon="chevron-right"
            color="white"
            class="
              absolute
              z-50
              mr-8
              right-0
              cursor-pointer
              opacity-50
              iconCarousel
            "
            size="1x"
            type="outline"
            colorBackground="white"
            style="z-index: 99999"
          />
        </div>
      </div>
    </div>

    <!-- POPUP -->
    <div v-show="showPopUp">
      <div
        class="overflow-hidden fixed centerBox z-50"
        style="z-index: 999999999999; height: 90vh"
        :style="{ width: slidePopUpWidth + 'px' }"
      >
        <div class="flex items-center">
          <div @click="previousSlide()">
            <V-Icon
              icon="chevron-left"
              color="white"
              class="absolute ml-8 cursor-pointer opacity-50 iconCarousel z-50"
              size="1x"
              type="outline"
              colorBackground="white"
              style="z-index: 99999"
            />
          </div>
          <div
            class="sliders flex relative"
            :style="{ width: carouselPopUpWidth + 'px' }"
          >
            <V-Icon
              icon="times"
              class="fixed right-0 z-50 mr-4 mt-3 cursor-pointer"
              size="lg"
              color="white"
              type="outline"
              colorBackground="white"
              :paddingHorizontal="2"
              :paddingVertical="1"
              @clicked="closePopup()"
            />

            <!-- <div class="bg-gray-800 opacity-75 h-screen w-full absolute z-40"></div> -->
            <div
              v-for="(component, index) in components"
              :key="index"
              class="slide"
              :ref="'slidePopup-' + index"
              style="transition: 1s"
              :style="{ width: slidePopUpWidth + 'px' }"
            >
              <component
                :is="component.type"
                :type="component.props.type"
                :color="component.props.color"
                :name="component.props.name"
                :rounded="component.props.rounded"
                :text="component.props.text"
                :label="component.props.label"
                :placeholder="component.props.placeholder"
                :align="component.props.align"
                :marginTop="component.props.marginTop"
                :marginBottom="component.props.marginBottom"
                :image="component.props.image"
                :parentName="component.props.parentName"
                :height="component.props.height"
                :parallax="component.props.parallax"
                :combinations="component.props.combinations"
                :components="component.props.components"
                :onClick="component.props.onClick"
                :textAlign="component.props.textAlign"
                :icon="component.props.icon"
                :size="component.props.size"
                :wrapper="component.props.wrapper"
                :colorBackground="component.props.colorBackground"
                :cover="component.props.cover"
              ></component>
            </div>
          </div>

          <div @click="nextSlide()">
            <V-Icon
              icon="chevron-right"
              color="white"
              class="
                absolute
                z-50
                mr-8
                right-0
                cursor-pointer
                opacity-50
                iconCarousel
              "
              size="1x"
              type="outline"
              colorBackground="white"
              style="z-index: 99999"
            />
          </div>
        </div>
      </div>
      <BackgroundPopUp @clicked="closePopup()" class="cursor-pointer" />
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Carousel",
  data() {
    return {
      carouselIndex: 0,
      carouselWidth: "",
      slideWidth: "",
      carouselPopUpWidth: 0,
      slidePopUpWidth: "",
      showPopUp: false,
      components: [
        {
          type: "Banner",
          props: {
            image: "carousel_unu.jpg",
            parentName: "Home",
            height: "full",
            parallax: true,
            cover: true,
            combinations: [
              {
                type: "Title",
                props: {
                  text: "Build Better Websites With Bikin FIRST",
                  textAlign: "center",
                  color: "white",
                  fontWeight: "extrabold",
                  size: "5xl",
                  uppercase: true,
                },
              },
              {
                type: "SubTitle",
                props: {
                  text: "We are team of talented designers making websites with Bootstrap",
                  color: "white",
                  textAlign: "center",
                  size: "2xl",
                  uppercase: true,
                  fontWeight: "light",
                },
              },
              {
                type: "Buttons",
                props: {
                  text: "Get Started",
                  type: "outline",
                  color: "white",
                  align: "center",
                  marginTop: 5,
                  size: "medium",
                },
              },
            ],
          },
        },
        {
          type: "Banner",
          props: {
            image: "carousel_unu.jpg",
            parentName: "Home",
            height: "full",
            parallax: true,
            cover: true,
            combinations: [
              {
                type: "Title",
                props: {
                  text: "Build Better Websites With Bikin SECOND",
                  textAlign: "center",
                  color: "white",
                },
              },
              {
                type: "SubTitle",
                props: {
                  text: "We are team of talented designers making websites with Bootstrap",
                  color: "white",
                },
              },
              {
                type: "Buttons",
                props: {
                  text: "Get Started",
                  type: "outline",
                  color: "white",
                  align: "center",
                  marginTop: 5,
                  size: "medium",
                },
              },
            ],
          },
        },
        {
          type: "Banner",
          props: {
            image: "carousel_unu.jpg",
            parentName: "Home",
            height: "full",
            parallax: true,
            cover: true,
            combinations: [
              {
                type: "Title",
                props: {
                  text: "Build Better Websites With Bikin THIRD",
                  textAlign: "center",
                  color: "white",
                },
              },
              {
                type: "SubTitle",
                props: {
                  text: "We are team of talented designers making websites with Bootstrap",
                  color: "white",
                },
              },
              {
                type: "Buttons",
                props: {
                  text: "Get Started",
                  type: "outline",
                  color: "white",
                  align: "center",
                  marginTop: 5,
                  size: "medium",
                },
              },
            ],
          },
        },
        {
          type: "Banner",
          props: {
            image: "carousel_unu.jpg",
            parentName: "Home",
            height: "full",
            parallax: true,
            cover: true,
            combinations: [
              {
                type: "Title",
                props: {
                  text: "Build Better Websites With Bikin FOURTH",
                  textAlign: "center",
                  color: "white",
                },
              },
              {
                type: "SubTitle",
                props: {
                  text: "We are team of talented designers making websites with Bootstrap",
                  color: "white",
                },
              },
              {
                type: "Buttons",
                props: {
                  text: "Get Started",
                  type: "outline",
                  color: "white",
                  align: "center",
                  marginTop: 5,
                  size: "medium",
                },
              },
            ],
          },
        },
      ],
      slides: [],
    };
  },
  props: {
    popUp: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    nextSlide() {
      if (this.carouselIndex == this.slides.length / 2 - 1) {
        this.carouselIndex = 0;
      } else {
        this.carouselIndex += 1;
      }
      this.setTranslate(this.slides);
    },
    previousSlide() {
      if (this.carouselIndex == 0) {
        this.carouselIndex = this.slides.length / 2 - 1;
      } else {
        this.carouselIndex -= 1;
      }
      this.setTranslate(this.slides);
    },
    setCarouselWidth() {
      this.carouselWidth = this.setSlideWidth() * this.components.length;
    },
    setSlideWidth() {
      this.slideWidth = window.innerWidth;
      return this.slideWidth;
    },
    setCarousePopUpWidth() {
      this.carouselPopUpWidth =
        this.setSlidePopUpWidth() * this.components.length;
    },
    setSlidePopUpWidth() {
      this.slidePopUpWidth = window.innerWidth * 0.8;
      return this.slidePopUpWidth;
    },
    closePopup() {
      this.showPopUp = false;
    },
    setTranslate(slides) {
      slides.forEach((slide) => {
        if (slide.includes("Popup")) {
          this.$refs[slide][0].style.transform =
            "translateX(" + -this.carouselIndex * this.slidePopUpWidth + "px)";
        } else {
          this.$refs[slide][0].style.transform =
            "translateX(" + -this.carouselIndex * this.slideWidth + "px)";
        }
      });
      return;
    },
  },
  mounted() {
    this.slides = Object.keys(this.$refs);
    this.setCarouselWidth();
    this.setSlideWidth();
    this.setCarousePopUpWidth();
    this.setSlidePopUpWidth();
    let self = this;
    window.addEventListener(
      "resize",
      _.debounce(function () {
        self.setCarouselWidth();
        self.setSlideWidth();
        self.setCarousePopUpWidth();
        self.setSlidePopUpWidth();
        self.setTranslate(self.slides);
      }, 100)
    );
  },
  updated() {
    this.slides = Object.keys(this.$refs);
    this.setTranslate(this.slides);
  },
};
</script>