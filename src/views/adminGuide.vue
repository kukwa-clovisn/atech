<template>
  <div class="container">
    <h1 class="admin">Admin user guide</h1>
    <div class="btns">
      <button
        @click="
          guide.guide1 = true;
          guide.guide2 = false;
          guide.guide3 = false;
          guide.guide4 = false;
          guide.guide5 = false;
          guide.guide6 = false;
        "
      >
        create course</button
      ><button
        @click="
          guide.guide1 = false;
          guide.guide2 = true;
          guide.guide3 = false;
          guide.guide4 = false;
          guide.guide5 = false;
          guide.guide6 = false;
        "
      >
        email client</button
      ><button
        @click="
          guide.guide1 = false;
          guide.guide2 = false;
          guide.guide3 = true;
          guide.guide4 = false;
          guide.guide5 = false;
          guide.guide6 = false;
        "
      >
        writing a blog</button
      ><button
        @click="
          guide.guide1 = false;
          guide.guide2 = false;
          guide.guide3 = false;
          guide.guide4 = true;
          guide.guide5 = false;
          guide.guide6 = false;
        "
      >
        admin setting</button
      ><button
        @click="
          guide.guide1 = false;
          guide.guide2 = false;
          guide.guide3 = false;
          guide.guide4 = false;
          guide.guide5 = true;
          guide.guide6 = false;
        "
      >
        feedback</button
      ><button
        @click="
          guide.guide1 = false;
          guide.guide2 = false;
          guide.guide3 = false;
          guide.guide4 = false;
          guide.guide5 = false;
          guide.guide6 = true;
        "
      >
        view all courses
      </button>
    </div>

    <div class="content" v-if="guide.guide1">
      <h2>creating a course guide</h2>
      <p>
        Creating a course. In the "create course" section, there are input and
        textarea sections that are suppose to be filled. There are fields that
        must be filled( those that have a star(*) ) and others that are
        optional. Reading this guide to the end is very very importand. Do well
        to read to the end.
      </p>
      <p>
        The <span>create course</span> area has instructions on how each field
        should be filled. Hovering over each input field will will pop up how
        the field should be field. Some of the fields and how they should be
        field will be listed here.
      </p>
      <h4><span>video field</span></h4>
      <p>
        the video input field is mainly for video links and the
        <span>order</span> is very very important.
      </p>
      <p>
        multiple video links can be added in the video input by separating each
        link with a comma. the video links for a best practice should be
        <span>youtube embeded videos</span>
      </p>
      <p>
        To embed a Youtube video, go to the video and click on the
        <span>share</span> button and some sharing options will be displayed
        amongs which you will find <span>Embed</span> then you click on the
        <span>Embed</span> and a link wll be display to you as an iframe. Then
        you copy the code with the tags and paste in the video input field.
        Multiple videos can be added to each input field and each link should be
        separated with a comma(,) depending on howmany videos you want to be
        displayed and the order in which you place them is very important.
      </p>
      <h4><span>Intro</span></h4>
      <p>
        The intro text input field should contain a short and brief description
        of the course for those eager to take the course to see
      </p>
      <h4>Note <span>*</span></h4>
      <p>
        Not all the input fields must be filled. They should be filled according
        to the type or kind of course. A normal course won't require all the
        input fields to be filled.
      </p>
      <h3>Rich text inputs:</h3>
      <p>
        there are rich text inputs which give you the ability to format your
        text in a way that you want your course to look like. We will walk
        through different parts of the rich text input so you know when and how
        to use each took present.
      </p>
      <h4>Headings</h4>
      <p>
        The headings are different form "Heading1 to Heading6" with Heading1
        being the largest in size and Heading6 being the smallest in size. As
        examples, <span>Heading1</span> will look like this:
      </p>
      <h1>This is Heading1</h1>
      <p>While <span>Heading6</span> will look like this:</p>
      <h6>This is Heading6</h6>
      <h4>inline</h4>
      <p>
        The Inline section has different ways of styling or adjusting the texts
        be it bold or italic or any manner of your choice
      </p>
      <h4>Blocks</h4>
      <p>
        The Blocks sections which has different containers to wrap up your text
        in. We have the paragraph, DIV, BLOGQOUTE and PRE.
      </p>
      <h4>Align</h4>
      <p>
        The align helps you align your texts the way you will want to the left,
        right or center of the page.
      </p>
      <h4>Format</h4>
      <p>
        the format contains a lot of functions to suit your writing. In format,
      </p>
      <ol>
        <li>
          you can configure the color of your text using the
          <span>text color</span>,
        </li>
        <li>
          you can choose the background color of your text the way you want
          usign the <span>background color</span>,
        </li>
        <li>
          we have the <span> line-height</span> which is the horizontal spacing
          between lines,
        </li>
        <li>
          we have <span>font-size </span> which helps you choose the text size
          you want
        </li>
      </ol>
      <h4>insert</h4>
      <p>With the inset element, you can handle the following</p>
      <ol>
        <li>You can insert images using the <span>image</span> element</li>
        <li>
          You can add links to your courses using the <span>link</span>element
        </li>
        <li>
          You can add tables to your courses by using the
          <span>table</span>element
        </li>
        <li>
          You have the <span>horizontal line</span> tool to add horizontal lines
          to your courses
        </li>
      </ol>
      <p>
        The other fields are self explanatory though not too important but where
        need arises can be used. You can also drop a
        <span>feedback</span> whenever and wherever you encounter any challenge
        or anything you seem not to understand so we can help you out with
        further explanations or visit the <span>help</span>tool to understand
        more how to use the elements in the rich text editor field.
      </p>
    </div>

    <div class="content" v-if="guide.guide2">
      <h2>Sending email guide</h2>
      <p>
        The Email sending page is quite self explanatory and the input fields
        aren't complicated but there are key things to note while emailing
        clients.
      </p>
      <p>
        The <span>Email Client</span> has two buttons which are "send to
        client(s)" and "send to all clients"
      </p>
      <h4>Emailing a single client:</h4>
      <p>
        To email a single client maybe in response to a private question or
        anything related to the academy, you select the
        <span>send to specific client(s)</span> and you can send to one or more
        clients by pasting their email addresses in the email input field and
        separating each email address with a comma(,). If the email is
        successful, you will get a pop up response to indicate that the email
        has been sent successfully otherwise you will be get an error pop up
        message indicating where the reason for the failed emailing.
      </p>
      <h4>Email all clients at once</h4>
      <p>
        If you will want to send an email to all the clients understaking your
        course or all the clients subscribed to your course at once, then you
        click on the <span>send to all clients</span>button and type out your
        email and it would be sent to all clients subscribed to your course.
      </p>
      <h4>Note <span>*</span></h4>
      <p>
        The <span>send to all members</span> button is only available for admins
        with the permission to email all academy subscribers.
      </p>
    </div>
    <div class="content" v-if="guide.guide3">
      <h2>Writing a blog post guide</h2>
      <p>
        You can get or learn how to use the rich text input field from the
        "create course guide".
      </p>
      <p>
        After creating a blog post, you can always view the post(s) you created
        from the <span>view post</span> in the menu dropdown.
      </p>
    </div>
    <div class="content" v-if="guide.guide4">
      <h2>Admin settings guide</h2>
      <p>
        In the setting tab, you will be able to edit and customize how you want
        your page or dashboard to like. So you will choose in between the
        <span>dark mode</span>, <span>light mode</span> or
        <span>gray mode </span>and your page will look exactly the way you want
        it to look
      </p>
    </div>
    <div class="content" v-if="guide.guide5">
      <h2>Sending feedback guide</h2>
      <p>
        In the send feedback tab, you'll have a simple form to fill and express
        your experience with your dashboard and if possible also suggest how you
        will like it to or to look like if it doesn't yet suit your standard.
        All your difficulties will be handled once you send a feedback to the IT
        department of the acadmey. All we desire is that you have the best
        experience while creating or uploading your courses.
      </p>
    </div>
    <div class="content" v-if="guide.guide6">
      <h2>view all courses page guide</h2>
      <p>
        In the view all courses page, you will find all the courses you've
        uploaded and there are some attributes you have to access the courses
      </p>
      <h4>Edit course</h4>
      <p>
        With the <span>edit course</span>button, you can edit a course in case
        of spelling error or just updating the course while changing or adding
        new features to the course. Always refer to the create course guide to
        learn how to create or update a course easily.
      </p>
      <h4>Delete course</h4>
      <p>
        With the <span>Delete</span> button, the course will be deleted
        completely from the database so do well to be sure of deleting a course
        if the course isn't valuabel again before heading to delete it because
        the act is not recoverable.
      </p>
      <h4>Note <span>*</span></h4>
      <p>
        In Your dashboard, you will be able to find all the statistics and
        analytics of each course from the views, likes, dislikes and comments
        all together and also the number of people subscribed to the course.
      </p>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "AdminGuide",
  setup() {
    let guide = reactive({
      guide1: true,
      guide2: false,
      guide3: false,
      guide4: false,
      guide5: false,
      guide6: false,
    });
    return { guide };
  },
};
</script>
<style lang="scss" scoped>
$primaryColor: #072e54;
$secondaryColor: rgb(215, 214, 214);
$tertiaryColor: #194e82;
$baseColor: rgba(230, 101, 129, 1);
$text: rgb(84, 84, 84);
.container {
  width: 100%;
  height: fit-content;
  .admin {
    width: 95%;
    padding: 20px;
    margin: auto;
    text-transform: capitalize;
    text-align: left;
    color: $text;
    font: 600 30px "Nunito Sans", sans-serif;
  }

  .btns {
    width: 97%;
    height: fit-content;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    button {
      width: max-content;
      height: 40px;
      padding: 0 10px;
      margin: 10px;
      border: 1px solid rgb(148, 147, 147);
      border-radius: 3px;
    }
  }

  .content {
    width: 100%;
    padding: 20px;
    background: $secondaryColor;

    h2 {
      text-align: left;
      text-transform: capitalize;
      color: rgb(66, 65, 65);
    }
    h1,
    h3,
    h4,
    h6 {
      text-align: left;
      padding: 10px;
    }
    p {
      text-align: left;
      width: 90%;
      margin: auto;
      font-size: 13px;
    }
    span {
      font-size: 17px;
      color: $baseColor;
    }
    ol {
      width: 85%;
      margin: auto;
      li {
        text-align: left;
        font-size: 13px;
        list-style-position: outside;
      }
    }
  }
}
</style>