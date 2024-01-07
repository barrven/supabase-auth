//import the supabase connection from the utils folder
const supabase = require('../../utils/supabase-connect');

exports.handler = async (event, context) => {
    // Get everything from the notes table
    let { data: notes, error } = await supabase
        .from('notes')
        .select('*')

    // Did it work?
    console.log(`------`, notes, error);

    return {
        statusCode: 200,
        body: `result: ${notes}, error: ${error}`
    };
};
