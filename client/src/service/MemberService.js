import axios from 'axios'

export default class MemberService {

    constructor(){
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/members'
        })
    }

    getAllMembers = () => this.service.get('/getAllMembers')
    getOneMember = id => this.service.get(`/getOneMember/${id}`)
    createMember = member => this.service.post(`/newMember`, member)
}