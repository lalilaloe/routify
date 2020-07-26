<script>
  import { params } from '@sveltech/routify'
  console.log('hello')
</script>

<div>Param: {JSON.stringify($params)}</div>
<!-- routify:options reload-on-param-change=true -->