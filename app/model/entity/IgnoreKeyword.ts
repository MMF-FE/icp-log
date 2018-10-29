import {Entity, PrimaryGeneratedColumn, Column, getRepository} from 'typeorm'

@Entity()
export class IgnoreKeyword {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    keyword: string

    @Column()
    creatDate: Date


}

export default () => getRepository(IgnoreKeyword)