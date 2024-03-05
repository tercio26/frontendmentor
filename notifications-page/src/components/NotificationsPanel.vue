<template>
  <div class="bg-white px-3 py-4 border-lg-rounded">
    <div class="d-flex justify-content-space-between align-items-center mb-4">
      <div class="mr-auto">
        <span class="text-xl text-bold text-dark mr-2">Notifications</span>

        <span class="badge badge-primary" v-if="unreadCount > 0">{{ unreadCount }}</span>
      </div>

      <a class="ml-auto text-secondary text-sm text-hover-primary" href="" @click.prevent="markAllAsRead">Mark all as read</a>
    </div>

    <component
        @click.prevent="markAsRead(notification.notificationId)"
        v-for="notification in notifications"
        :key="notification.notificationId"
        :is="genNotificationComponent(notification.type)"
        :notification="notification"/>
  </div>
</template>

<script>
import NotificationType from './notification_type.js';
import NotificationReaction from "@/components/NotificationReaction.vue";
import NotificationFollow from "@/components/NotificationFollow.vue";
import NotificationJoinGroup from "@/components/NotificationJoinGroup.vue";
import NotificationSentMessage from "@/components/NotificationSentMessage.vue";
import NotificationLeftGroup from "@/components/NotificationLeftGroup.vue";
import NotificationCommentPicture from "@/components/NotificationCommentPicture.vue";

export default {
  name: "NotificationsPanel",

  components: {
    NotificationReaction,
    NotificationFollow,
    NotificationJoinGroup,
    NotificationSentMessage,
    NotificationLeftGroup,
    NotificationCommentPicture
  },

  data() {
    return {
      myProfile: {},
      notifications: []
    }
  },

  computed: {
    unreadCount() {
      return this.notifications.filter(notification => !notification.isRead).length;
    }
  },

  created() {
    this.fetchProfile()
    this.fetchNotification()
  },

  methods: {
    markAllAsRead() {
      if (this.unreadCount === 0) return

      this.notifications = this.notifications.map(x => {
        x.isRead = true
        return x;
      })
    },

    markAsRead(id) {
      this.notifications = this.notifications.map(x => {
        if (x.notificationId === id) {
          x.isRead = true
        }
        return x;
      })
    },

    fetchProfile() {
      this.myProfile = {
        profileId: 99,
        name: "Tercio",
      }
    },

    genNotificationComponent(notificationType) {
      switch (notificationType) {
        case NotificationType.Reaction:
          return 'NotificationReaction';
        case NotificationType.Follow:
          return 'NotificationFollow';
        case NotificationType.JoinGroup:
          return 'NotificationJoinGroup';
        case NotificationType.SentMessage:
          return 'NotificationSentMessage';
        case NotificationType.LeftGroup:
          return 'NotificationLeftGroup';
        case NotificationType.CommentPicture:
          return 'NotificationCommentPicture';
      }
    },

    fetchNotification() {
      this.notifications = [
        {
          notificationId: 1,
          from: {profileId: 1, name: 'Mark Webber', avatar: '/assets/images/avatar-mark-webber.webp'},
          type: NotificationType.Reaction,
          destination: {postId: 1, content: "My first tournament today!"},
          href: '',
          createdAt: '1m ago',
          isRead: false
        },
        {
          notificationId: 2,
          from: {profileId: 2, name: 'Angela Gray', avatar: '/assets/images/avatar-angela-gray.webp'},
          type: NotificationType.Follow,
          destination: {profileId: 99},
          href: '',
          createdAt: '5m ago',
          isRead: false
        },
        {
          notificationId: 3,
          from: {profileId: 3, name: 'Jacob Thompson', avatar: '/assets/images/avatar-jacob-thompson.webp'},
          type: NotificationType.JoinGroup,
          destination: {groupId: 1, content: "Chess Club"},
          href: '',
          createdAt: '1 day ago',
          isRead: false
        },
        {
          notificationId: 4,
          from: {profileId: 4, name: 'Rizky Hasanuddin', avatar: '/assets/images/avatar-rizky-hasanuddin.webp'},
          type: NotificationType.SentMessage,
          destination: {
            profileId: 99,
            content: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm alisReady having lots of fun and improving my game."
          },
          href: '',
          createdAt: '5 days ago',
          isRead: true
        },
        {
          notificationId: 5,
          from: {profileId: 5, name: 'Kimberly Smith', avatar: '/assets/images/avatar-kimberly-smith.webp'},
          type: NotificationType.CommentPicture,
          destination: {postId: 2, content: '/assets/images/image-chess.webp'},
          href: '',
          createdAt: '1 week ago',
          isRead: true
        },
        {
          notificationId: 6,
          from: {profileId: 6, name: 'Nathan Peterson', avatar: '/assets/images/avatar-nathan-peterson.webp'},
          type: NotificationType.Reaction,
          destination: {postId: 3, content: "5 end-game strategies to increase your win rate"},
          href: '',
          createdAt: '2 weeks ago',
          isRead: true
        },
        {
          notificationId: 7,
          from: {id: 1, name: 'Anna Kim', avatar: '/assets/images/avatar-anna-kim.webp'},
          type: NotificationType.LeftGroup,
          destination: {groupId: 1, content: "Chess Club"},
          href: '',
          createdAt: '2 weeks ago',
          isRead: true
        }
      ];
    }
  }
}
</script>

<style scoped>

</style>