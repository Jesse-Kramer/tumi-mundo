<script>
  import { redirect } from '@sveltejs/kit';
  import { userState } from '$lib/account';
  import { onNavigate } from '$app/navigation';

  let userId, profileId;

  $: userState.subscribe((state) => {
    userId = state.userId;
    profileId = state.profileId;
  });

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  if (!userId || profileId === undefined) {
    throw redirect(303, '/log-in');
  }
</script>

<slot></slot>
