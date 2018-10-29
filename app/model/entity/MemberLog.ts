import {Entity, PrimaryGeneratedColumn, Column, getRepository} from 'typeorm'

@Entity()
export class MemberLog {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    account: string

    @Column()
    loginDateTime: Date

    @Column()
    ip: string

    @Column()
    email: string

}

export default () => getRepository(MemberLog)