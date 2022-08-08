<template>
  <div
    class="container"
    :class="{ 'dark-mode': mode.dark, 'gray-mode': mode.gray }"
  >
    <div class="left-content">
      <div class="user-logo">
        {{ profile.name.split("")[0] }}
      </div>
      <h1>Dashboard</h1>
      <div class="container-card">
        <div class="top-content">
          <div class="img">
            <img :src="profile.image" v-if="!preview" alt="" />
          </div>
          <div class="img">
            <img :src="profileImageUpdate.preview" v-show="preview" alt="" />
          </div>
          <div class="blur" @click="$refs.selectImg.click()"></div>
          <div class="profile-img">
            <img
              class="image-center"
              :src="profile.image ? profile.image : profileImageUpdate.preview"
              alt=""
            />
          </div>

          <input
            type="file"
            @change="onChangeFunc"
            ref="selectImg"
            name="image"
            style="display: none"
          />
          <button @click="$refs.selectImg.click()">
            <i class="fa-solid fa-camera-retro"></i>select photo
          </button>
          <button @click="onFileSubmit" v-show="profileImageUpdate.preview">
            <i class="fa-solid fa-cloud-arrow-up"></i>click update profile
          </button>
        </div>
        <div class="bottom-content">
          <span class="edit" @click="updateProfile = true"
            ><i class="fa-solid fa-pen"></i
          ></span>
          <div class="info">
            <h1>{{ profile.name }}</h1>
            <h2>{{ profile.email }}</h2>
            <p>
              Profession: <span>{{ profile.profession }}</span>
            </p>
            <p>
              location: <span>{{ profile.location }}</span>
            </p>
            <p>
              DOB: <span>{{ profile.dob }}</span>
            </p>
            <p>
              study/work at: <span>{{ profile.school_company }}</span>
            </p>
          </div>
        </div>
      </div>

      <h1>Select page color mode:</h1>
      <div class="page-modes">
        <button
          class="page-mode light"
          :class="{ active: mode.light }"
          @click="pagemode('light')"
          title="Light mode"
        >
          <span>
            <i class="fa-solid fa-moon off"></i><i class="fa-solid fa-bahai"></i
          ></span>
        </button>
        <button
          class="page-mode dark"
          :class="{ active: mode.dark }"
          @click="pagemode('dark')"
          title="Dark mode"
        >
          <span
            ><i class="fa-solid fa-power-off off"></i
            ><i class="fa-solid fa-bahai"></i
          ></span>
        </button>
        <button
          class="page-mode gray"
          :class="{ active: mode.gray }"
          @click="pagemode('gray')"
          title="Gray mode"
        >
          <span
            ><i class="fa-solid fa-power-off off"></i
            ><i class="fa-solid fa-bahai"></i
          ></span>
        </button>
      </div>
    </div>
    <div class="right-content">
      <div class="top-content">
        <h2>Subscriptions</h2>
        <ul>
          <li
            v-for="subscription in profile.subscriptions"
            :key="subscription.id"
          >
            <span class="subscription">{{ subscription.course }}</span>
            <span
              class="plan"
              :class="{ paid: subscription.plan === 'paid' }"
              >{{ subscription.plan }}</span
            >
          </li>
        </ul>
        <p v-if="!profile.subscriptions.length">No subscriptions yet</p>
      </div>
      <div class="bottom-content">
        <h2>Bookmarks</h2>
        <ul>
          <li v-for="(course, index) in profile.savedCourses" :key="index">
            <span class="plan">{{ index + 1 }}</span>
            <p class="subscription">{{ course.title }}</p>
          </li>
        </ul>
        <p v-if="!profile.savedCourses.length">No courses saved yet</p>
      </div>
    </div>
    <transition name="appear">
      <div class="update-container" v-if="updateProfile">
        <div class="blur" @click="updateProfile = false"></div>
        <div class="form">
          <form @submit.prevent="updateFunc()">
            <h2>
              update your profile
              <span @click="updateProfile = !updateProfile">&times;</span>
            </h2>
            <p>fill only the input fields you want to update.</p>
            <div class="credentials">
              <div class="input">
                <div class="value">
                  <label for="name" class="input-label">
                    <i class="fa-solid fa-user"></i
                  ></label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="update_user.name"
                    placeholder=" "
                  />
                  <label for="name" class="active">new Name</label>
                </div>
              </div>
              <div class="input">
                <div class="value">
                  <label for="location" class="input-label">
                    <i class="fa-solid fa-key"></i>
                  </label>

                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder=" "
                    v-model="update_user.location"
                  />
                  <label for="location" class="active"> location</label>
                </div>
              </div>
              <div class="input">
                <div class="value">
                  <label for="school" class="input-label">
                    <i class="fa-solid fa-school"></i
                  ></label>

                  <input
                    type="text"
                    name="school"
                    id="school"
                    v-model="update_user.school_company"
                    placeholder=" "
                  />
                  <label for="school" class="active">school/company</label>
                </div>
              </div>
              <div class="input">
                <div class="value">
                  <label for="profession" class="input-label">
                    <i class="fa-solid fa-graduation-cap"></i
                  ></label>

                  <input
                    type="text"
                    name="profession"
                    id="profession"
                    v-model="update_user.profession"
                    placeholder=" "
                  />
                  <label for="profession" class="active"> profession</label>
                </div>
              </div>
              <div class="input">
                <div class="value">
                  <label for="dob" class="input-label">
                    <i class="fa-solid fa-key"></i>
                  </label>

                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    placeholder=" "
                    v-model="update_user.dob"
                  />
                  <label for="dob" class="active">Birth day</label>
                </div>
              </div>
              <button type="submit">Update Profile</button>
            </div>
            <div class="footer">
              &copy;<span>Advanced<span>Tech</span>Academy</span>
            </div>
          </form>
        </div>
      </div>
    </transition>
    <transition name="pop">
      <div class="response-div" v-if="response.success || response.failed">
        <div class="success" v-if="response.success">
          <i class="fa-solid fa-circle-check"></i>{{ response.msg }}
        </div>
        <div class="failed" v-if="response.failed">
          <i class="fa-solid fa-triangle-exclamation"></i>{{ response.msg }}
        </div>
      </div>
    </transition>
    <Spinner v-show="loader.state" :rate="loader.percent" :msg="loader.msg" />
  </div>
</template>
<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive, onBeforeMount, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import Spinner from "@/components/spinner.vue";
export default {
  name: "Course_user",
  setup() {
    const router = useRouter();
    const store = useStore();
    const mode = computed(() => store.state.course_mode);
    let profile = reactive({
      name: "",
      email: "",
      image: "",
      location: "",
      profession: "",
      dob: null,
      school_company: "",
      subscriptions: [],
      savedCourses: [],
      dropdown: false,
    });
    let loader = reactive({
      state: false,
      percent: 0,
      msg: "",
    });
    let preview = ref(null);
    let profileImageUpdate = reactive({
      image: null,
      preview: null,
      selectedImage: null,
    });
    let response = reactive({
      msg: "",
      success: false,
      failed: false,
    });
    let update_user = reactive({
      name: "",
      profession: "",
      location: null,
      dob: null,
      school_company: null,
    });
    let updateProfile = ref(false);
    function checkToken() {
      loader.state = true;
      loader.msg = "Collecting data... please wait";
      axios("api/token", {
        onUploadProgress: (uploadEvent) => {
          response.success = true;
          response.msg = `processing data: ${Math.round(
            (uploadEvent.loaded / uploadEvent.total) * 100
          )} %`;

          loader.percent = computed(() => {
            return Math.round((uploadEvent.loaded / uploadEvent.total) * 100);
          });

          if (loader.percent === 100) {
            response.success = false;
          }
        },
      })
        .then((res) => {
          profile.name = res.data.username;
          profile.email = res.data.email;
          profile.location = res.data.location ? res.data.location : "_____ ";
          profile.dob = res.data.dob ? res.data.dob : "_____ ";
          profile.profession = res.data.profession
            ? res.data.profession
            : "_____ ";
          profile.school_company = res.data.school_company
            ? res.data.school_company
            : "_____ ";
          profile.subscriptions = res.data.subscription;
          profile.savedCourses = res.data.Bookmarks;
          loader.state = false;
          if (res.data.image) {
            profile.image = `data:image/png;base64,` + res.data.image;
          }
        })
        .catch((err) => {
          router.push("/login");
        });
    }
    onBeforeMount(() => {
      checkToken();
    });
    function pagemode(mode) {
      store.dispatch("pagemode", mode);
    }
    function onChangeFunc(e) {
      if (e.target.files[0].size < 1048576) {
        profileImageUpdate.preview = e.target.files[0];
        preview.value = e.target.files[0];
      } else {
        response.failed = true;
        response.msg =
          "Error: image size exceeded. image should be less than 1MB (<1mb)";
        setTimeout(() => {
          response.failed = false;
        }, 3000);
      }
    }
    watch(preview, (preview) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(preview);
      fileReader.addEventListener("load", () => {
        profileImageUpdate.preview = fileReader.result;
      });
    });
    const onFileSubmit = () => {
      loader.state = true;
      loader.msg = "uploading photo...please wait";
      const formdata = new FormData();
      formdata.append("image", preview.value, preview.value.name);
      axios
        .post(`api/user/upload/`, formdata, {
          onUploadProgress: (uploadEvent) => {
            response.success = true;
            response.msg = `processing data: ${Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            )} %`;

            loader.percent = computed(() => {
              return Math.round((uploadEvent.loaded / uploadEvent.total) * 100);
            });
            if (loader.percent === 100) {
              response.success = false;
            }
          },
        })
        .then((res) => {
          loader.state = false;
          if (res.statusText === "OK") {
            profile.image = `data:image/png;base64,` + res.data.image;
            profileImageUpdate.preview =
              `data:image/png;base64,` + res.data.image;

            response.success = true;
            response.msg = "profile photo successfully updated.";

            setTimeout(() => {
              response.success = false;
            }, 3000);
          }
        })
        .catch((err) => {
          loader.state = false;
        });
    };
    function updateFunc() {
      loader.state = true;
      loader.msg = "updating profile...please wait";

      update_user.name = update_user.name ? update_user.name : profile.name;
      update_user.profession = update_user.profession
        ? update_user.profession
        : profile.profession;
      update_user.location = update_user.location
        ? update_user.location
        : profile.location;
      update_user.school_company = update_user.school_company
        ? update_user.school_company
        : profile.school_company;

      update_user.dob = update_user.dob ? update_user.dob : profile.dob;
      axios
        .post(
          `/api/user/update/${localStorage.getItem("accessId")}`,
          update_user,
          {
            onUploadProgress: (uploadEvent) => {
              response.success = true;
              response.msg = `processing data: ${Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              )} %`;

              loader.percent = computed(() => {
                return Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                );
              });

              if (loader.percent === 100) {
                response.success = false;
              }
            },
          }
        )
        .then((res) => {
          if (res.statusText === "OK") {
            localStorage.setItem("accessToken", res.data.accessToken);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${localStorage.getItem("accessToken")}`;

            updateProfile.value = false;
            profile.name = res.data.username;
            profile.email = res.data.email;
            profile.location = res.data.location;
            profile.profession = res.data.profession;
            profile.school_company = res.data.school_company;
            profile.dob = res.data.dob;

            loader.state = false;
            setTimeout(() => {
              response.success = false;
            }, 2000);
          } else {
            response.msg = res.data.msg;
            response.failed = true;
            setTimeout(() => {
              response.failed = false;
            }, 3000);
          }
        })
        .catch((err) => {
          loader.state = false;
          response.msg = err.msg
            ? err.msg
            : err.response.data.msg
            ? err.response.data.msg
            : "Access Denied. Maybe network failure";
          response.failed = true;
          setTimeout(() => {
            response.failed = false;
          }, 3000);
        });
    }
    return {
      loader,
      profile,
      preview,
      update_user,
      profileImageUpdate,
      updateFunc,
      onChangeFunc,
      response,
      updateProfile,
      mode,
      pagemode,
      onFileSubmit,
    };
  },
  components: { Spinner },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  background: rgb(226, 226, 231);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 25px;
  padding-bottom: 20px;
  position: relative;

  .left-content {
    width: 60%;
    height: 80%;
    border-radius: 15px;
    position: relative;
    padding: 10px;

    .user-logo {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      position: absolute;
      top: 29%;
      left: 4%;
      border: 3px solid white;
      background: white;
      color: teal;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 45px;
      cursor: pointer;
    }

    h1 {
      text-align: left;
      padding: 10px;
    }

    .container-card {
      width: 100%;
      height: fit-content;
      border-radius: 15px;
      overflow: hidden;
    }
    .top-content {
      width: 100%;
      height: 250px;
      background: url(../assets/book.jpeg);
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: scroll;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      cursor: pointer;

      .blur {
        width: 100%;
        height: 100%;
        opacity: 0.7;
      }
      .img {
        height: fit-content;
        width: 100%;
        position: absolute;
        top: 0;
        left: auto;
        overflow: hidden;
        overflow-y: auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }

      .profile-img {
        position: absolute;
        width: 200px;
        height: 200px;
        left: auto !important;
        top: auto;

        overflow: hidden;
        border-radius: 100%;
        border: 4px solid white;
        .image-center {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      button {
        position: relative;
        z-index: 1;
        width: 150px;
        height: 50px;
        border: none;
        background: white;
        box-shadow: 0 0 1px 1px white;
        border-radius: 5px;
        margin: 15px;
        color: white;
        color: #102441;
        opacity: 0.9;
        font: 25px 600 "Poppins", sans-serif;
        i {
          margin-right: 3px;
          color: #e66581;
          font-size: 30px;
        }
      }

      &:hover {
        button,
        .blur {
          display: block;
        }

        button {
          color: white;
          background: transparent;
          opacity: 1;
        }
      }
    }
    .bottom-content {
      position: relative;
      background: white;
      padding: 30px 10px 5px 10px;
      .edit {
        width: 70px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 2%;
        right: 5%;
        cursor: pointer;

        i {
          font-size: 20px;
          color: teal;

          &:active {
            transform: scale(0.8);
          }
        }
      }
      .info {
        h1,
        h2,
        h5,
        p {
          text-align: left;
          padding: 10px;

          span {
            font: 17px "Nunito Sans", sans-serif;
            padding: 0 10px;
          }
        }
        h2 {
          font-size: 18px;
          color: rgb(80, 79, 79);
        }
        @media screen and (max-width: 400px) {
          h1 {
            font-size: 20px;
          }
        }
      }
    }
    .page-modes {
      width: 300px;
      height: fit-content;
      margin: 10px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      .page-mode {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: rgb(215, 214, 214);
        border: none;
        border-radius: 100%;
        padding: 2px;
        span {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            font-size: 24px;
            display: none;
          }
          .off {
            font-size: 100%;
            display: block;
          }
        }
      }
    }

    .page-mode.dark {
      background: rgb(21, 21, 106);
      span {
        background: #194e82;
        box-shadow: 0 0 1px 1px #194e82;
      }
    }
    .page-mode.gray {
      background: rgb(27, 182, 99);
      span {
        background: rgb(4, 138, 64);
        box-shadow: 0 0 1px 1px rgb(27, 182, 99);
      }
    }
    .page-mode.active {
      position: relative;
      order: 1;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      animation: mode 2s infinite linear forwards;
      span {
        width: 100%;
        height: 100%;
        box-shadow: none;

        i {
          display: block;
          color: rgba(230, 101, 129, 1);
        }
        .off {
          display: none;
        }
      }
    }
    @keyframes mode {
      to {
        transform: rotateZ(360deg);
      }
    }
  }

  .right-content {
    width: 30%;
    height: 80%;

    .top-content,
    .bottom-content {
      width: 100%;
      height: fit-content;
      margin: 20px auto;
      border-radius: 10px;
      background: white;
      box-shadow: 0 0 2px 2px rgb(226, 226, 231);
      padding: 10px;

      h2 {
        text-align: left;
        padding: 10px;
        color: rgb(88, 87, 87);
      }
      ul {
        width: 100%;
        height: 150px;
        background: whitesmoke;
        border-radius: 3px;
        padding: 5px;
        list-style: none;
        overflow-y: scroll;

        li {
          width: 100%;
          height: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3px 10px;

          .plan {
            width: fit-content;
            padding: 2px 10px;
            height: fit-content;
            background: teal;
            color: white;
            border-radius: 3px;
            font-size: 14px;
          }
          .subscription {
            width: 87%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: left;
          }
          .plan.paid {
            background: #e66581;
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    .left-content,
    .right-content {
      width: 95%;
      height: fit-content;
    }
  }
}
.update-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .blur {
    background: linear-gradient(to top, rgb(8, 58, 88), #13253e);
    opacity: 0.7;
    z-index: 1;
  }
  .form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    form {
      width: 80vw;
      height: 90vh;
      border-radius: 10px;
      background: white;
      overflow: hidden;
      position: relative;
      z-index: 1;
      overflow-y: auto;
      padding: 20px 10px;
      padding-bottom: 0;

      h2 {
        width: 100%;
        position: relative;
        padding: 10px;
        font: 600 30px "Nunito Sans", sans-serif;
        color: rgb(65, 78, 83);

        span {
          position: absolute;
          top: 0;
          right: 15px;
          color: tomato;
          cursor: pointer;
        }
      }

      .credentials {
        width: 83%;
        height: fit-content;
        margin: 10px auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        .input {
          padding: 5px 0;
          width: 45%;
          margin: 10px;

          .value {
            width: 100%;
            height: fit-content;
            display: Flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 0.5px 1px #315589;
            border-radius: 3px;
            position: relative;
            label {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 4px 3px;
              cursor: text;
              text-transform: capitalize;
              transition: all 0.3s ease;
            }

            label.active {
              position: absolute;
              top: 20%;
              left: 12%;
            }

            @keyframes inputwrite {
              to {
                transform: translateX(100%);
              }
            }

            label.input-label {
              position: relative;
              width: 10%;
              height: 35px;
              background: transparent;
              border-right: 1px solid rgb(207, 206, 206);
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 1px 0;
              cursor: pointer;
              i {
                color: rgb(107, 132, 145);
                position: relative;
                left: 0;
                animation: writing 5s linear infinite forwards;
              }
            }

            input {
              width: 90%;
              height: 50px;
              outline: none;
              border: none;
              padding-left: 15px;
              background: transparent;
              border-radius: 0 3px 3px 0;

              &:active,
              &:focus {
                background: white;
              }
            }
            @keyframes writing {
              to {
                transform: rotateY(360deg);
              }
            }

            input:focus ~ label.active,
            input:not(:focus):not(:placeholder-shown) ~ label.active {
              top: -0.6rem;
              left: 12%;
              background: white;
              font-size: 0.7em;
              padding: 3px 6px;
              box-shadow: none;
              span {
                display: none;
              }
            }
          }
        }
        button {
          width: 80%;
          height: 50px;
          margin: 10px auto;
          border: 1px solid rgb(112, 112, 112);
          background: transparent;
          border-radius: 30px;
          color: rgb(82, 82, 82);
          font: 600 24px "Nunito Sans", sans-serif;

          &:hover {
            background: #13253e;
            color: white;
          }
        }
      }

      .footer {
        width: 100%;
        height: 40px;
        background: rgb(240, 241, 241);
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          padding: 0 5px;
          font: 500 17px "Nunito Sans", sans-serif;
          color: rgb(65, 78, 83);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            color: tomato;
            padding: 0;
          }
        }
        .link {
          text-decoration: none;
          padding-left: 5px;
          color: rgb(38, 51, 59);

          &:hover {
            color: tomato;
            text-decoration: underline;
          }
        }

        @media screen and (max-width: 320px) {
          span {
            font-size: 18px;
          }
        }
      }

      @media screen and (max-width: 768px) {
        width: 400px;

        .credentials {
          width: 100%;

          .input {
            width: 97%;
          }
          button {
            width: 97%;
          }
        }

        @media screen and (max-width: 450px) {
          width: 98vw;
        }
      }
    }
  }
}

.container.dark-mode,
.container.gray-mode {
  background: linear-gradient(to top, rgb(8, 58, 88), #13253e);

  .left-content {
    box-shadow: none;
    box-shadow: 0 0 3px #102441;
    .container-card {
      box-shadow: 0 0 3px #102441;
    }
    .user-logo {
      border-color: rgb(8, 58, 88);
      background: rgb(8, 58, 88);
    }

    h1 {
      color: white;
    }

    .bottom-content {
      background: rgb(8, 58, 88);
      .edit i {
        color: white;
      }
      h1,
      h5,
      h2,
      p {
        color: rgb(227, 225, 225);
      }
    }
  }
  .right-content {
    .top-content,
    .bottom-content {
      background: rgb(8, 58, 88);
      box-shadow: 0 0 3px #102441;

      h2 {
        color: rgb(220, 217, 217);
      }

      ul {
        background: #13253e;

        li {
          color: rgb(195, 194, 194);
        }
      }
    }
  }
}

.container.gray-mode {
  background: rgb(4, 104, 49);

  .left-content {
    border-color: rgb(4, 138, 64);
    box-shadow: 0 0 3px rgb(16, 81, 45);

    .container-card {
      box-shadow: 0 0 3px rgb(16, 81, 45);
    }
    .user-logo {
      background: rgb(4, 104, 49);
      border-color: rgb(4, 138, 64);
    }
    .bottom-content {
      background: rgb(4, 138, 64);
      h1,
      h5,
      h2,
      p {
        color: rgb(227, 225, 225);
      }
    }
  }

  .right-content {
    .top-content,
    .bottom-content {
      background: rgb(4, 138, 64);
      box-shadow: 0 0 3px rgb(16, 81, 45);

      ul {
        background: rgb(4, 104, 49);
      }
    }
  }
}

.response-div {
  width: 100vw;
  height: fit-content;
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  top: 19vh;
  left: 0;
  z-index: 1;
  div {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    color: white;
    z-index: 1;
    background: rgb(40, 223, 122);
    font: 600 18px "Poppins", sans-serif;

    i {
      color: white;
      font-size: 25px;
      padding: 0 3px;
    }
  }
  div.failed {
    background: crimson;
    color: white;
  }
  @media screen and (max-width: 500px) {
    top: 60vh;
  }
}
</style>