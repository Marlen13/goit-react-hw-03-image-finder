
import css from '../../styles.css';

export const SearchBar = () => {
    return (
        
        <header class={css.searchbar}>
  <form class={css.searchForm}>
    <button type="submit" class={css.searchForm_button}>
    <span class={css.searchForm_button_label}>Search</span>
    </button>

    <input
      class={css.searchForm_input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        
    )
}