
//import the supabase connection from the utils folder
const supabase = require('../../utils/supabase-connect');

exports.handler = async (event, context) => {
    // Just return the date and note columns of every note
    let { data: notes, error } = await supabase
        .from('notes')
        .select('date, note')

    // Did it work?
    console.log(`------`, notes, error);

    return {
        statusCode: 200,
        body: `result: ${notes}, error: ${error}`
    };
};