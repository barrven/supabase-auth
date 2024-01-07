//import the supabase connection from the utils folder
const supabase = require('../../utils/supabase-connect');

exports.handler = async (event, context) => {
    

    // Insert a row
    const { data, error } = await supabase
        .from('notes')
        .insert([
            { note: 'I need to not forget this' },
        ]);

    // Did it work?
    console.log(`------`,data, error);

    return {
        statusCode: 200,
        body: `result: ${data}, error: ${error}`
    };
};
