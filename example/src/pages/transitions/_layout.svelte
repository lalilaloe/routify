<script>
  import { url } from '@sveltech/routify'
  import TabsTransition from '@sveltech/routify/runtime/decorators/BaseTransition.svelte'
</script>

<a href={$url('./:param', { param: 'foo' })}>foo</a>
<a href={$url('./:param', { param: 'bar' })}>bar</a>
<a href={$url('./:param', { param: 'baz' })}>baz</a>
<a href={$url('./page')}>page</a>

<slot decorator={TabsTransition} />
