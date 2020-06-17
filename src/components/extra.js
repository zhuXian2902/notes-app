/** @format */

<div className="notes">
	{this.state.edit === false && this.state.read === false && (
		<List
			list={this.state.list}
			handleDelete={this.handleDelete}
			handleUpdate={this.handleUpdate}
			handleRead={this.handleRead}
		/>
	)}
</div>;
