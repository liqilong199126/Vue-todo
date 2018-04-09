import "../assets/styles/footer.styl"


export default {
  data() {
    return {
      author:'liqilong'
    }
  },
	render() {
	  return (
      <div id="footer">
        <span>Writeen by {this.author}</span>
      </div>
	  )
	}
}