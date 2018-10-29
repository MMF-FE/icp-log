import {Entity, PrimaryGeneratedColumn, Column, getRepository, ManyToOne} from 'typeorm'
import { User } from './User'

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    token: string

    @ManyToOne(() => User, user => user.session)
    user: User
}

export default () => getRepository(Session)