
<script>
  export let type = 'button'; // standaard type is 'button'
  export let label = 'Continue'; // standaard label
  export let onClick = () => {}; // standaard is een lege functie
</script>


{#if type === 'button'}
  <button on:click={onClick}>{label}</button>
{:else if type === 'input'}
  <input type="submit" value={label} on:click={onClick} />
{/if}


<!-- <input type="submit" value="Continue" tabindex="0"/> -->

<style>

/* continue button voor input */
input[type="submit"], button{
    font-family: Poppins;
    width: 85%;
    padding: 13px;
    border-radius: 7px;
    border: none;
    font-size: 18px;
    color: #4f4f4f;
    background-color: #d4d4d4 ;
    position: fixed;
    bottom: 0;
    margin-bottom: 40px;
}
input[type="submit"]:hover,:focus{
    cursor: pointer;
    color: white;
    background-color: #215165 ;
    border: 1px solid red;
}
    
</style>