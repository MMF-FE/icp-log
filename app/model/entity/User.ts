import {Entity, PrimaryGeneratedColumn, Column, getRepository, OneToMany} from 'typeorm'
import { Session } from './Session'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    name: string

    @Column()
    password: string

    @OneToMany(() => Session, session => session.user)
    session: Session
}

export default () => getRepository(User)