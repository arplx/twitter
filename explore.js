const displayTweets = async () => {
  try {
    const response = await fetch('explore.json');
    const data = await response.json();
    const tweets = data.slice(0, 5);
    const twitterFeed = document.getElementById('twitter-feed');

    tweets.forEach(tweet => {
      const twitterPost = document.createElement('div');
      twitterPost.className = 'twitter-post';

      const profilePic = document.createElement('img');
      profilePic.src = tweet.profile_picture;
      profilePic.alt = 'Profile Picture';

      const postImage = document.createElement('img');
      postImage.src = tweet.post_image;
      postImage.alt = 'Post Image';

      const postCaption = document.createElement('p');
      postCaption.textContent = tweet.caption;

      const twitterIcons = document.createElement('div');
      twitterIcons.className = 'twitter-icons';

      const likesIcon = document.createElement('a');
      likesIcon.href = tweet.likes_link;
      likesIcon.textContent = 'Likes';

      const commentsIcon = document.createElement('a');
      commentsIcon.href = tweet.comments_link;
      commentsIcon.textContent = 'Comments';

      const shareIcon = document.createElement('a');
      shareIcon.href = tweet.share_link;
      shareIcon.textContent = 'Share';

      twitterIcons.appendChild(likesIcon);
      twitterIcons.appendChild(commentsIcon);
      twitterIcons.appendChild(shareIcon);

      twitterPost.appendChild(profilePic);
      twitterPost.appendChild(postImage);
      twitterPost.appendChild(postCaption);
      twitterPost.appendChild(twitterIcons);

      twitterFeed.appendChild(twitterPost);
    });
  } catch (error) {
    console.error('Error fetching tweets:', error);
  }
};

displayTweets();
