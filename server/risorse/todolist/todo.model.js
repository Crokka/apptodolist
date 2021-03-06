var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todosSchema = new Schema({
	titolo: {
		type: String,
		required: [true, "Inserisci il titolo"]
	},
	descrizione: {
		type: String,
		required: [true, "Inserisci la descrizione"]
	},
	fatto: {
		type: Boolean,
		default: false
	}
});

var Todos = mongoose.model('Todos', todosSchema);
module.exports = Todos;