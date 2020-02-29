export {};
const knex = require('../../../../config/db');

type Params = {
    date: string
}

const eventsByDate = async (_: any, { date }: Params) => {
    try {
        const events = await knex('events').whereRaw(`event_date_time::varchar(255) like '${date}%'`);
        return events;
    }
    catch (e) {
        console.log("events error", e);
    }
};

module.exports = eventsByDate;