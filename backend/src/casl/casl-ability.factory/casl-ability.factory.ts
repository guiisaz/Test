import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { Action, User } from "src/users/entities/user.entity";

type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;


@Injectable()
export class CaslAbilityFactory {
    createForUser(user: User){
        const { can, build, cannot } = new AbilityBuilder<
        Ability<[Action, Subjects]>
        >(Ability as AbilityClass<AppAbility>);

        if (user.isAdmin) {
            can(Action.Manage, "all")
        } else {
            can(Action.Read, "all")
        }

        return build({
            detectSubjectType: (item) => 
                item.constructor as ExtractSubjectType<Subjects>,
        })
    }
}