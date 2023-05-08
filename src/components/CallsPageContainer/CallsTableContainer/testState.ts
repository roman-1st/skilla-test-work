import React from "react"

export const state = [
    { id: 1, type: 'Дозвонился', dateNoTime: '',picBrowser: 0, picPhone: 1, date: '2023-05-05 19:00:00', avatar: "/icons/avatarWorker.svg", source: 'Rabota.ru', partnerData: { phone: "7 (987) 567-17-12" }, partnerId: "2321", fromName: '', record: 's', time: 350, },
    { id: 5, type: 'Дозвонился', dateNoTime: '',picBrowser: 0, picPhone: 1, date: '2023-05-05 19:00:00', avatar: "/icons/avatarWorker.svg", source: 'Rabota.ru', partnerData: { phone: "7 (987) 567-17-12" }, partnerId: "2321", fromName: '', record: 's', time: 350, },

    { id: 2, type: 'Входящий', dateNoTime: '', picBrowser: 1, picPhone: 1 ,date: '2023-05-05 18:00:00', avatar: "/icons/avatarWorkerTwo.svg", source: 'Google', partnerData: { phone: "7 (954) 533-17-88" }, partnerId: "2321", fromName: '', record: '', time: 0, },
    { id: 3, type: 'Входящий', dateNoTime: '', picBrowser: 1, picPhone: 0, date: '2023-05-05 16:33:00', avatar: "/icons/avatarWorkerThree.svg", source: 'Yandex', partnerData: { phone: "7 (951) 623-22-15" }, partnerId: "2321", fromName: '', record: '', time: 0, },
    {
        id: 4, type: 'Входящий', dateNoTime: '', date: '2023-05-05 16:20:00', avatar: "/icons/avatarWorkerTwo.svg", source:
            'Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво', partnerData: { phone: "7 (987) 555-12-82" }, partnerId: "2321", fromName: '', record: '', time: 0,
    },

]


// type={el.status}
// dateNoTime={el.date_notime}
// date={el.date}
// avatar={el.person_avatar}
// partnerData={el.partner_data}
// fromName={el.partner_data.name}
// record={el.record}
// time={el.time}
// partnershipId={el.partnership_id}
// status={el.status}a